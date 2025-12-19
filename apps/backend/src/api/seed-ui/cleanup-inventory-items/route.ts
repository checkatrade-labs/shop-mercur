import type { MedusaRequest, MedusaResponse } from '@medusajs/framework'

/**
 * GET /seed-ui/cleanup-inventory-items
 * 
 * Public HTML page to cleanup orphaned seller inventory items
 * Just navigate to this URL and it will show a form to cleanup inventory items
 * 
 * Example: http://localhost:9000/seed-ui/cleanup-inventory-items
 */
export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cleanup Inventory Items - Medusa</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    
    .container {
      background: white;
      border-radius: 16px;
      padding: 40px;
      max-width: 800px;
      width: 100%;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }
    
    h1 {
      font-size: 32px;
      margin-bottom: 10px;
      color: #1a202c;
    }
    
    .subtitle {
      color: #718096;
      margin-bottom: 30px;
      font-size: 16px;
    }
    
    .form-group {
      margin-bottom: 24px;
    }
    
    label {
      display: block;
      margin-bottom: 8px;
      font-weight: 600;
      color: #2d3748;
    }
    
    input {
      width: 100%;
      padding: 12px 16px;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
      font-size: 16px;
      transition: border-color 0.2s;
    }
    
    input:focus {
      outline: none;
      border-color: #667eea;
    }
    
    .help-text {
      font-size: 14px;
      color: #718096;
      margin-top: 4px;
    }
    
    .status {
      padding: 16px 24px;
      border-radius: 12px;
      margin-bottom: 24px;
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 500;
      display: none;
    }
    
    .status.loading {
      background: #ebf8ff;
      color: #2c5282;
      border: 2px solid #4299e1;
    }
    
    .status.success {
      background: #f0fff4;
      color: #22543d;
      border: 2px solid #48bb78;
    }
    
    .status.error {
      background: #fff5f5;
      color: #742a2a;
      border: 2px solid #f56565;
    }
    
    .status.show {
      display: flex;
    }
    
    .spinner {
      width: 20px;
      height: 20px;
      border: 3px solid #e2e8f0;
      border-top-color: #4299e1;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    
    button {
      background: #667eea;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      width: 100%;
      transition: background 0.2s;
    }
    
    button:hover {
      background: #5a67d8;
    }
    
    button:disabled {
      background: #cbd5e0;
      cursor: not-allowed;
    }
    
    .results {
      background: #f7fafc;
      padding: 24px;
      border-radius: 12px;
      margin-top: 24px;
      display: none;
    }
    
    .results.show {
      display: block;
    }
    
    .result-item {
      background: white;
      padding: 16px;
      border-radius: 8px;
      margin-bottom: 12px;
      border: 1px solid #e2e8f0;
    }
    
    .result-label {
      font-weight: 600;
      color: #2d3748;
      margin-bottom: 4px;
    }
    
    .result-value {
      color: #718096;
      font-family: monospace;
      font-size: 14px;
      word-break: break-all;
    }
    
    .warning {
      background: #fffaf0;
      border: 2px solid #ed8936;
      color: #7c2d12;
      padding: 16px;
      border-radius: 8px;
      margin-bottom: 24px;
    }
    
    .warning strong {
      display: block;
      margin-bottom: 8px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🧹 Cleanup Inventory Items</h1>
    <p class="subtitle">Remove orphaned seller inventory item links</p>
    
    <div class="warning">
      <strong>⚠️ Warning</strong>
      This will permanently delete seller inventory item links where the referenced inventory item no longer exists.
    </div>
    
    <form id="cleanupForm">
      <div class="form-group">
        <label for="sellerId">Seller ID <span style="color: #f56565;">*</span></label>
        <input 
          type="text" 
          id="sellerId" 
          name="sellerId" 
          placeholder="sel_01KAV1K271B56YMT260A867T2V"
          required
        />
        <p class="help-text">Required: Enter the seller ID to clean up orphaned inventory items</p>
      </div>
      
      <div id="status" class="status">
        <div class="spinner"></div>
        <span id="statusText">Processing...</span>
      </div>
      
      <button type="submit" id="submitBtn">
        Cleanup Orphaned Inventory Items
      </button>
    </form>
    
    <div id="results" class="results"></div>
  </div>

  <script>
    document.getElementById('cleanupForm').addEventListener('submit', async (e) => {
      e.preventDefault()
      
      const statusEl = document.getElementById('status')
      const statusText = document.getElementById('statusText')
      const submitBtn = document.getElementById('submitBtn')
      const resultsEl = document.getElementById('results')
      const sellerId = document.getElementById('sellerId').value.trim()
      
      // Show loading state
      statusEl.className = 'status loading show'
      statusText.textContent = 'Cleaning up orphaned inventory items...'
      submitBtn.disabled = true
      resultsEl.classList.remove('show')
      
      // Validate seller ID is provided
      if (!sellerId || sellerId.trim() === '') {
        statusEl.className = 'status error show'
        statusText.textContent = '❌ Error: Seller ID is required'
        submitBtn.disabled = false
        return
      }
      
      try {
        const body = { seller_id: sellerId }
        
        const response = await fetch('/seed/cleanup-inventory-items', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        })
        
        if (!response.ok) {
          const error = await response.json()
          throw new Error(error.message || 'Failed to cleanup inventory items')
        }
        
        const data = await response.json()
        
        // Show success state
        statusEl.className = 'status success show'
        statusText.textContent = \`✅ \${data.message}\`
        
        // Show results
        resultsEl.classList.add('show')
        resultsEl.innerHTML = \`
          <h3 style="margin-bottom: 16px;">Cleanup Results</h3>
          <div class="result-item">
            <div class="result-label">Deleted Count</div>
            <div class="result-value">\${data.deleted_count}</div>
          </div>
          <div class="result-item">
            <div class="result-label">Seller ID</div>
            <div class="result-value">\${data.seller_id}</div>
          </div>
          \${data.orphaned_items && data.orphaned_items.length > 0 ? \`
            <div class="result-item">
              <div class="result-label">Deleted Items (\${data.orphaned_items.length})</div>
              <div class="result-value" style="max-height: 300px; overflow-y: auto;">
                \${data.orphaned_items.map(item => \`
                  <div style="padding: 8px; border-bottom: 1px solid #e2e8f0;">
                    <strong>Link ID:</strong> \${item.link_id}<br>
                    <strong>Seller ID:</strong> \${item.seller_id}<br>
                    <strong>Inventory Item ID:</strong> \${item.inventory_item_id}
                  </div>
                \`).join('')}
              </div>
            </div>
          \` : ''}
        \`
        
        submitBtn.disabled = false
        
      } catch (error) {
        // Show error state
        statusEl.className = 'status error show'
        statusText.textContent = \`❌ Error: \${error.message}\`
        submitBtn.disabled = false
      }
    })
  </script>
</body>
</html>
  `

  res.setHeader('Content-Type', 'text/html')
  res.status(200).send(html)
}

