/**
 * Mapping: Product Type → Category Hierarchy
 * 
 * Structure: Product Type → [Category, Subcategory, Product Type Category]
 */

export const PRODUCT_TYPE_TO_CATEGORY: Record<string, {
  level1: string
  level2: string
  level3: string
}> = {
  // Building Materials → Timber
  'TREATED_SAWN': { level1: 'Building Materials', level2: 'Timber', level3: 'Treated Sawn' },
  'PLANED_SQUARE_EDGE': { level1: 'Building Materials', level2: 'Timber', level3: 'Planed Square Edge' },
  'TREATED_SAWN_C16': { level1: 'Building Materials', level2: 'Timber', level3: 'Treated Sawn C16' },
  'CLS_STUDWORK': { level1: 'Building Materials', level2: 'Timber', level3: 'CLS Studwork' },
  'CLADDING': { level1: 'Building Materials', level2: 'Timber', level3: 'Cladding' },

  // Building Materials → Sheet Materials
  'PLYWOOD_SHEETS': { level1: 'Building Materials', level2: 'Sheet Materials', level3: 'Plywood Sheets' },
  'MDF_SHEETS': { level1: 'Building Materials', level2: 'Sheet Materials', level3: 'MDF Sheets' },
  'OSB_SHEETS': { level1: 'Building Materials', level2: 'Sheet Materials', level3: 'OSB Sheets' },
  'LOFT_BOARDS': { level1: 'Building Materials', level2: 'Sheet Materials', level3: 'Loft Boards' },
  'CHIP_BOARD': { level1: 'Building Materials', level2: 'Sheet Materials', level3: 'Chip Board' },
  'HARD_BOARD_SHEETS': { level1: 'Building Materials', level2: 'Sheet Materials', level3: 'Hard Board Sheets' },
  'DOOR_BLANKS': { level1: 'Building Materials', level2: 'Sheet Materials', level3: 'Door Blanks' },

  // Building Materials → Cement & Aggregates
  'BALLAST_&_SUB_BASE': { level1: 'Building Materials', level2: 'Cement & Aggregates', level3: 'Ballast & Sub Base' },
  'CEMENT': { level1: 'Building Materials', level2: 'Cement & Aggregates', level3: 'Cement' },
  'SAND': { level1: 'Building Materials', level2: 'Cement & Aggregates', level3: 'Sand' },
  'GRAVEL': { level1: 'Building Materials', level2: 'Cement & Aggregates', level3: 'Gravel' },
  'TOPSOIL': { level1: 'Building Materials', level2: 'Cement & Aggregates', level3: 'Topsoil' },
  'CEMENT_PLASTICISER_&_DYES': { level1: 'Building Materials', level2: 'Cement & Aggregates', level3: 'Cement Plasticiser & Dyes' },
  'LIMES': { level1: 'Building Materials', level2: 'Cement & Aggregates', level3: 'Limes' },
  'READY_MIXED_CONCRETES_&_MORTAR': { level1: 'Building Materials', level2: 'Cement & Aggregates', level3: 'Ready Mixed Concretes & Mortar' },
  'SCREEDING_&_FLOOR_LEVELLING_COMPOUND': { level1: 'Building Materials', level2: 'Cement & Aggregates', level3: 'Screeding & Floor Levelling Compound' },
  'AGGREGATES': { level1: 'Building Materials', level2: 'Cement & Aggregates', level3: 'Aggregates' },

  // Building Materials → Plasterboard & Drylining
  'PLASTERBOARD': { level1: 'Building Materials', level2: 'Plasterboard & Drylining', level3: 'Plasterboard' },
  'PLASTER': { level1: 'Building Materials', level2: 'Plasterboard & Drylining', level3: 'Plaster' },
  'COVING': { level1: 'Building Materials', level2: 'Plasterboard & Drylining', level3: 'Coving' },
  'PLASTERING_ADHESIVES': { level1: 'Building Materials', level2: 'Plasterboard & Drylining', level3: 'Plastering Adhesives' },
  'INSULATED_PLASTERBOARD': { level1: 'Building Materials', level2: 'Plasterboard & Drylining', level3: 'Insulated Plasterboard' },
  'METAL_STUDS_&_CEILINGS': { level1: 'Building Materials', level2: 'Plasterboard & Drylining', level3: 'Metal Studs & Ceilings' },
  'BAGGED_PRODUCTS': { level1: 'Building Materials', level2: 'Plasterboard & Drylining', level3: 'Bagged Products' },
  'OTHER_BOARDS': { level1: 'Building Materials', level2: 'Plasterboard & Drylining', level3: 'Other Boards' },
  'DRYLINING_ACCESSORIES': { level1: 'Building Materials', level2: 'Plasterboard & Drylining', level3: 'Drylining Accessories' },

  // Building Materials → Insulation
  'LOFT_INSULATION': { level1: 'Building Materials', level2: 'Insulation', level3: 'Loft Insulation' },
  'INSULATION_BOARD': { level1: 'Building Materials', level2: 'Insulation', level3: 'Insulation Board' },
  'CAVITY_WALL_INSULATION': { level1: 'Building Materials', level2: 'Insulation', level3: 'Cavity Wall Insulation' },
  'INSULATION_FOIL': { level1: 'Building Materials', level2: 'Insulation', level3: 'Insulation Foil' },
  'INSULATION_SLABS': { level1: 'Building Materials', level2: 'Insulation', level3: 'Insulation Slabs' },
  'INSULATION_ROLLS': { level1: 'Building Materials', level2: 'Insulation', level3: 'Insulation Rolls' },
  'INSULATION_ACCESSORIES': { level1: 'Building Materials', level2: 'Insulation', level3: 'Insulation Accessories' },

  // Building Materials → Roofing
  'PVC_CORRUGATED_SHEETS': { level1: 'Building Materials', level2: 'Roofing', level3: 'PVC Corrugated Sheets' },
  'BITUMEN_SHEETS': { level1: 'Building Materials', level2: 'Roofing', level3: 'Bitumen Sheets' },
  'ROOF_FELT': { level1: 'Building Materials', level2: 'Roofing', level3: 'Roof Felt' },
  'ROOF_TILES': { level1: 'Building Materials', level2: 'Roofing', level3: 'Roof Tiles' },
  'LEAD_FLASHING': { level1: 'Building Materials', level2: 'Roofing', level3: 'Lead Flashing' },
  'PITCHED_ROOFING': { level1: 'Building Materials', level2: 'Roofing', level3: 'Pitched Roofing' },
  'FLAT_ROOFING': { level1: 'Building Materials', level2: 'Roofing', level3: 'Flat Roofing' },

  // Building Materials → Nails & Screws
  'SCREWS': { level1: 'Building Materials', level2: 'Nails & Screws', level3: 'Screws' },
  'SEALANTS': { level1: 'Building Materials', level2: 'Nails & Screws', level3: 'Sealants' },
  'FIXINGS': { level1: 'Building Materials', level2: 'Nails & Screws', level3: 'Fixings' },
  'NAILS': { level1: 'Building Materials', level2: 'Nails & Screws', level3: 'Nails' },
  'BONDING_ADHESIVES': { level1: 'Building Materials', level2: 'Nails & Screws', level3: 'Bonding Adhesives' },

  // Building Materials → Guttering & Drainage
  'ROUND_LINE_GUTTERING': { level1: 'Building Materials', level2: 'Guttering & Drainage', level3: 'Round Line Guttering' },
  'SQUARE_LINE_GUTTERING': { level1: 'Building Materials', level2: 'Guttering & Drainage', level3: 'Square Line Guttering' },
  'SOIL_PIPES_&_FITTINGS': { level1: 'Building Materials', level2: 'Guttering & Drainage', level3: 'Soil Pipes & Fittings' },
  'CHANNEL_DRAINAGE': { level1: 'Building Materials', level2: 'Guttering & Drainage', level3: 'Channel Drainage' },

  // Building Materials → Bricks & Lintels
  'BLOCKS': { level1: 'Building Materials', level2: 'Bricks & Lintels', level3: 'Blocks' },
  'BRICKS': { level1: 'Building Materials', level2: 'Bricks & Lintels', level3: 'Bricks' },
  'BLOCK_PAVING': { level1: 'Building Materials', level2: 'Bricks & Lintels', level3: 'Block Paving' },
  'CONCRETE_LINTELS': { level1: 'Building Materials', level2: 'Bricks & Lintels', level3: 'Concrete Lintels' },
  'STEEL_LINTELS': { level1: 'Building Materials', level2: 'Bricks & Lintels', level3: 'Steel Lintels' },
  'PADSTONES': { level1: 'Building Materials', level2: 'Bricks & Lintels', level3: 'Padstones' },
  'BLOCK_&_BEAM_FLOORING': { level1: 'Building Materials', level2: 'Bricks & Lintels', level3: 'Block & Beam Flooring' },
  'BRICKWORK_ACCESORIES': { level1: 'Building Materials', level2: 'Bricks & Lintels', level3: 'Brickwork Accessories' },
  'BRICKWORK_ACCESSORIES': { level1: 'Building Materials', level2: 'Bricks & Lintels', level3: 'Brickwork Accessories' }, // Correct spelling alias

  // Building Materials → Building Supplies
  'BUILDERS\'_METALWORK': { level1: 'Building Materials', level2: 'Building Supplies', level3: 'Builders\' Metalwork' },
  'DAMP_PROOFING': { level1: 'Building Materials', level2: 'Building Supplies', level3: 'Damp Proofing' },
  'PROTECTIVE_SHEETING': { level1: 'Building Materials', level2: 'Building Supplies', level3: 'Protective Sheeting' },
  'FASCIAS_&_SOFFITS': { level1: 'Building Materials', level2: 'Building Supplies', level3: 'Fascias & Soffits' },
  'RAW_MATERIALS': { level1: 'Building Materials', level2: 'Building Supplies', level3: 'Raw Materials' },


  // Flooring and Tiling → Flooring Tools & Accessories
  'RUG_PAD': { level1: 'Flooring and Tiling', level2: 'Flooring Tools & Accessories', level3: 'Rug Pad' },
  'TEXTILE_DEODORIZER': { level1: 'Flooring and Tiling', level2: 'Flooring Tools & Accessories', level3: 'Textile Deodorizer' },
  'WEATHER_STRIPPING': { level1: 'Flooring and Tiling', level2: 'Flooring Tools & Accessories', level3: 'Weather Stripping' },

  // Flooring and Tiling → Vinyl
  'VINYL': { level1: 'Flooring and Tiling', level2: 'Vinyl', level3: 'Vinyl' },

  // Flooring and Tiling → Carpet
  'CARPETING': { level1: 'Flooring and Tiling', level2: 'Carpet', level3: 'Carpeting' },

  // Flooring and Tiling → Rugs
  'RUG': { level1: 'Flooring and Tiling', level2: 'Rugs', level3: 'Rug' },

  // Flooring and Tiling → Stair Runner
  'STAIR_RUNNER': { level1: 'Flooring and Tiling', level2: 'Stair Runner', level3: 'Stair Runner' },

  // Flooring and Tiling → Laminate
  'LAMINATE': { level1: 'Flooring and Tiling', level2: 'Laminate', level3: 'Laminate' },

  // Flooring and Tiling → LVT
  'LVT': { level1: 'Flooring and Tiling', level2: 'LVT', level3: 'LVT' },

  // Flooring and Tiling → Engineered Wood
  'ENGINEERED_WOOD': { level1: 'Flooring and Tiling', level2: 'Engineered Wood', level3: 'Engineered Wood' },

  // Flooring and Tiling → Tiles
  'TILE': { level1: 'Flooring and Tiling', level2: 'Tiles', level3: 'Tile' },
  // Renewable and Energy → EV Charger
  'EV_CHARGER': { level1: 'Renewable and Energy', level2: 'EV Charger', level3: 'EV Charger' },

  // Renewable and Energy → Solar
  'SOLAR_PANELS': { level1: 'Renewable and Energy', level2: 'Solar', level3: 'Solar Panels' },
  
  // Renewable and Energy → Solar Battery
  'BATTERY_STORAGE': { level1: 'Renewable and Energy', level2: 'Solar Battery', level3: 'Battery Storage' },

  // Electrical and Lighting → Fans & Air Conditioning Units
  'AIR_CONDITIONERS': { level1: 'Electrical and Lighting', level2: 'Fans & Air Conditioning Units', level3: 'Air Conditioners' },

  // Heating and Plumbing → Boilers Supply & Fit
  'BOILERS_SUPPLY_&_FIT': { level1: 'Heating and Plumbing', level2: 'Boilers Supply & Fit', level3: 'Boilers Supply & Fit' },

  // Heating and Plumbing → Boilers & Boiler Packs
  'BOILERS_&_BOILER_PACKS': { level1: 'Heating and Plumbing', level2: 'Boilers & Boiler Packs', level3: 'Boilers & Boiler Packs' },

  // Heating and Plumbing → Boilers
  'BOILER_FLUES_&_ACCESSORIES': { level1: 'Heating and Plumbing', level2: 'Boiler Flues & Accessories', level3: 'Boiler Flues & Accessories' },

  // Gardens and Landscaping → Garden Supplies
  'PLANT_SEED': { level1: 'Gardens and Landscaping', level2: 'Garden Supplies', level3: 'Plant Seed' },
  'ANCHOR_STAKE': { level1: 'Gardens and Landscaping', level2: 'Garden Supplies', level3: 'Anchor Stake' },
  'GARDEN_&_RAILWAY_SLEEPERS': { level1: 'Gardens and Landscaping', level2: 'Garden Supplies', level3: 'Garden & Railway Sleepers' },
  'DECORATIVE_STONES_&_GRAVEL': { level1: 'Gardens and Landscaping', level2: 'Garden Supplies', level3: 'Decorative Stones & Gravel' },
  'WEED_MEMBRANES': { level1: 'Gardens and Landscaping', level2: 'Garden Supplies', level3: 'Weed Membranes' },

  // Gardens and Landscaping → Fencing
  'FENCE_POSTS': { level1: 'Gardens and Landscaping', level2: 'Fencing', level3: 'Fence Posts' },
  'FENCE_PANELS': { level1: 'Gardens and Landscaping', level2: 'Fencing', level3: 'Fence Panels' },
  'FENCE_BOARDS': { level1: 'Gardens and Landscaping', level2: 'Fencing', level3: 'Fence Boards' },
  'FENCING_ACCESSORIES': { level1: 'Gardens and Landscaping', level2: 'Fencing', level3: 'Fencing Accessories' },
  'TRELLIS_PANELS_&_SCREENING': { level1: 'Gardens and Landscaping', level2: 'Fencing', level3: 'Trellis Panels & Screening' },

  // Gardens and Landscaping → Decking
  'DECKING_BOARDS': { level1: 'Gardens and Landscaping', level2: 'Decking', level3: 'Decking Boards' },

  // Gardens and Landscaping → Driveways & Paving
  'PATH_&_LAWN_EDGING': { level1: 'Gardens and Landscaping', level2: 'Driveways & Paving', level3: 'Path & Lawn Edging' },
  'PAVING_&_WALLING': { level1: 'Gardens and Landscaping', level2: 'Driveways & Paving', level3: 'Paving & Walling' },

  // Doors and Windows → Internal Doors
  // 'FIRE_RATED_DOORS': { level1: 'Doors and Windows', level2: 'Internal Doors', level3: 'Fire Rated Doors' },
  // 'OAK_INTERNAL_DOORS': { level1: 'Doors and Windows', level2: 'Internal Doors', level3: 'Oak Internal Doors' },
  // 'PLYWOOD_FLUSH_DOORS': { level1: 'Doors and Windows', level2: 'Internal Doors', level3: 'Plywood Flush Doors' },
  // 'PANEL_DOORS': { level1: 'Doors and Windows', level2: 'Internal Doors', level3: 'Panel Doors' },

  // Doors and Windows → External Doors
  // 'EXTERNAL_FIRE_RATED_DOORS': { level1: 'Doors and Windows', level2: 'External Doors', level3: 'External Fire Rated Doors' },

  // Doors and Windows → Skirting & Architrave
  'ARCHITRAVES': { level1: 'Doors and Windows', level2: 'Skirting & Architrave', level3: 'Architraves' },
  'SKIRTING_BOARD': { level1: 'Doors and Windows', level2: 'Skirting & Architrave', level3: 'Skirting Board' },

  // Doors and Windows → Windows
  'WINDOW_BOARDS': { level1: 'Doors and Windows', level2: 'Windows', level3: 'Window Boards' },

  // Doors and Windows → Door Frames
  // 'INTERNAL_DOOR_FRAMES': { level1: 'Doors and Windows', level2: 'Door Frames', level3: 'Internal Door Frames' },

  'CABINETS_AND_STORAGE': { level1: '', level2: '', level3: '' },
  'SHOWERS': { level1: '', level2: '', level3: '' },
  'SHOWER_ACCESSORIES': { level1: '', level2: '', level3: '' },
  'BATH_TAPS': { level1: '', level2: '', level3: '' },
  'BATHROOM_TAPS': { level1: '', level2: '', level3: '' },
  'BIDET_TAPS': { level1: '', level2: '', level3: '' },
  'BASIN_TAPS': { level1: '', level2: '', level3: '' },
  'TAP_WASHERS_AND_REPAIRS': { level1: '', level2: '', level3: '' },
  'WASTE_&_TRAPS': { level1: '', level2: '', level3: '' },
  'BATHROOM_FITTINGS': { level1: '', level2: '', level3: '' },
  'BATHROOM_MIRRORS': { level1: '', level2: '', level3: '' },
  'BATHROOM_ACCESSORIES': { level1: '', level2: '', level3: '' },
  'KITCHEN_SINK_&_TAP_SET': { level1: '', level2: '', level3: '' },
  'KITCHEN_SINK': { level1: '', level2: '', level3: '' },
  'KITCHEN_MIXER_TAP': { level1: '', level2: '', level3: '' },
  'FILTER_KITCHEN_TAP': { level1: '', level2: '', level3: '' },
  'KITCHEN_SINK_ACCESSORIES': { level1: '', level2: '', level3: '' },
}

/**
 * Get category hierarchy for a product type
 */
export function getCategoryForProductType(productType: string) {
  if (!productType) {
    return null
  }
  
  // Exact match only
  const mapping = PRODUCT_TYPE_TO_CATEGORY[productType]
  
  return mapping || null
}

