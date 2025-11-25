import type { MedusaRequest, MedusaResponse } from '@medusajs/framework'

/**
 * GET /setup-seller
 * 
 * HTML page to create a seller with stock location
 * 
 * Example: http://localhost:9000/setup-seller
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
  <title>Setup Stock Location - Medusa</title>
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
      max-width: 600px;
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
      margin-bottom: 20px;
    }
    
    label {
      display: block;
      font-weight: 600;
      margin-bottom: 8px;
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
      display: flex;
      background: #ebf8ff;
      color: #2c5282;
      border: 2px solid #4299e1;
    }
    
    .status.success {
      display: flex;
      background: #f0fff4;
      color: #22543d;
      border: 2px solid #48bb78;
    }
    
    .status.error {
      display: flex;
      background: #fff5f5;
      color: #742a2a;
      border: 2px solid #f56565;
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
      width: 100%;
      background: #667eea;
      color: white;
      border: none;
      padding: 14px 24px;
      border-radius: 8px;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }
    
    button:hover {
      background: #5a67d8;
    }
    
    button:disabled {
      background: #cbd5e0;
      cursor: not-allowed;
    }
    
    .button-danger {
      background: #f56565;
      margin-top: 12px;
    }
    
    .button-danger:hover {
      background: #e53e3e;
    }
    
    .button-danger:disabled {
      background: #cbd5e0;
    }
    
    .result {
      margin-top: 24px;
      padding: 20px;
      background: #f7fafc;
      border-radius: 12px;
      display: none;
    }
    
    .result.show {
      display: block;
    }
    
    .result-item {
      margin-bottom: 12px;
    }
    
    .result-label {
      font-weight: 600;
      color: #2d3748;
    }
    
    .result-value {
      color: #4a5568;
      font-family: monospace;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📦 Setup Stock Location</h1>
    <p class="subtitle">Create a stock location for an existing seller</p>
    
    <div id="status" class="status"></div>
    
    <form id="sellerForm" onsubmit="createStockLocation(event)">
      <div class="form-group">
        <label for="email">Seller Email *</label>
        <input type="email" id="email" name="email" required placeholder="seller@example.com">
      </div>
      
      <button type="submit" id="submitBtn">Create Stock Location</button>
    </form>
    
    <div id="result" class="result"></div>
  </div>

  <script>
    async function createStockLocation(event) {
      event.preventDefault();
      
      const statusEl = document.getElementById('status');
      const resultEl = document.getElementById('result');
      const submitBtn = document.getElementById('submitBtn');
      const form = document.getElementById('sellerForm');
      
      // Get form data
      const formData = new FormData(form);
      const data = {
        email: formData.get('email')
      };
      
      // Show loading state
      statusEl.className = 'status loading';
      statusEl.innerHTML = '<div class="spinner"></div><span>Creating stock location...</span>';
      resultEl.className = 'result';
      submitBtn.disabled = true;
      
      try {
        const response = await fetch('/setup/seller', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Failed to create stock location');
        }
        
        const result = await response.json();
        
        // Show success state
        statusEl.className = 'status success';
        statusEl.innerHTML = '<span>✅ ' + result.message + '</span>';
        
        // Show results
        resultEl.className = 'result show';
        resultEl.innerHTML = \`
          <h3 style="margin-bottom: 16px; color: #1a202c;">\${result.data.alreadyExists ? 'Already Exists' : 'Success!'}</h3>
          
          <div class="result-item">
            <div class="result-label">Seller ID:</div>
            <div class="result-value">\${result.data.seller.id}</div>
          </div>
          
          <div class="result-item">
            <div class="result-label">Store Name:</div>
            <div class="result-value">\${result.data.seller.name}</div>
          </div>
          
          <div class="result-item">
            <div class="result-label">Email:</div>
            <div class="result-value">\${result.data.seller.email}</div>
          </div>
          
          \${result.data.stockLocation ? \`
            <div class="result-item">
              <div class="result-label">Stock Location ID:</div>
              <div class="result-value">\${result.data.stockLocation.id}</div>
            </div>
            
            <div class="result-item">
              <div class="result-label">Stock Location Name:</div>
              <div class="result-value">\${result.data.stockLocation.name}</div>
            </div>
            
            \${result.data.alreadyExists ? \`
              <button class="button-danger" onclick="deleteStockLocation('\${result.data.seller.email}')" id="deleteBtn">
                🗑️ Delete Stock Location
              </button>
            \` : ''}
          \` : ''}
        \`;
        
        submitBtn.disabled = false;
        
      } catch (error) {
        // Show error state
        statusEl.className = 'status error';
        statusEl.innerHTML = \`<span>❌ Error: \${error.message}</span>\`;
        submitBtn.disabled = false;
      }
    }
    
    async function deleteStockLocation(email) {
      const statusEl = document.getElementById('status');
      const resultEl = document.getElementById('result');
      const deleteBtn = document.getElementById('deleteBtn');
      
      if (!confirm('Are you sure you want to delete this stock location? This action cannot be undone.')) {
        return;
      }
      
      // Show loading state
      statusEl.className = 'status loading';
      statusEl.innerHTML = '<div class="spinner"></div><span>Deleting stock location...</span>';
      deleteBtn.disabled = true;
      
      try {
        const response = await fetch('/setup/seller', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email })
        });
        
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Failed to delete stock location');
        }
        
        const result = await response.json();
        
        // Show success state
        statusEl.className = 'status success';
        statusEl.innerHTML = '<span>✅ Stock location deleted successfully!</span>';
        
        // Clear the result and show a message to create a new one
        resultEl.className = 'result show';
        resultEl.innerHTML = \`
          <h3 style="margin-bottom: 16px; color: #1a202c;">Deleted Successfully</h3>
          <p style="color: #4a5568; margin-bottom: 16px;">The stock location has been deleted. You can now create a new one using the form above.</p>
        \`;
        
      } catch (error) {
        // Show error state
        statusEl.className = 'status error';
        statusEl.innerHTML = \`<span>❌ Error: \${error.message}</span>\`;
        deleteBtn.disabled = false;
      }
    }
  </script>
</body>
</html>
  `.trim()

  res.setHeader('Content-Type', 'text/html')
  res.status(200).send(html)
}

