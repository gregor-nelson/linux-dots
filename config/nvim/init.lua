vim.opt.clipboard = "unnamedplus"

-- Custom Theme Configuration for Neovim
-- Based on the provided color scheme

-- Color definitions
local colors = {
  black = "#1e222a",
  white = "#abb2bf",
  gray2 = "#2e323a", -- unfocused window border
  gray3 = "#545862",
  gray4 = "#6d8dad",
  blue = "#61afef",  -- focused window border
  green = "#7EC7A2",
  red = "#e06c75",
  orange = "#caaa6a",
  yellow = "#EBCB8B",
  pink = "#c678dd",
  border = "#1e222a", -- inner border
  -- Additional colors for enhanced visuals
  dark_blue = "#4b6bb8",
  dark_green = "#5a9970",
  dark_red = "#b85450",
}

-- Basic Neovim settings
vim.opt.termguicolors = true    -- Enable 24-bit RGB colors
vim.opt.background = "dark"     -- Set dark background
vim.opt.number = true           -- Show line numbers
vim.opt.relativenumber = true   -- Show relative line numbers
vim.opt.cursorline = true       -- Highlight current line
vim.opt.signcolumn = "yes"      -- Always show sign column

-- Additional visual improvements
vim.opt.scrolloff = 8           -- Keep 8 lines above/below cursor when scrolling
vim.opt.sidescrolloff = 8       -- Keep 8 columns to the left/right of cursor
vim.opt.wrap = false            -- Don't wrap lines
vim.opt.showmode = false        -- Don't show mode (like -- INSERT --) in command line
vim.opt.showcmd = true          -- Show partial commands in the last line
vim.opt.showmatch = true        -- Highlight matching brackets when cursor is over one
vim.opt.matchtime = 3           -- How many tenths of a second to show the match for
vim.opt.laststatus = 2          -- Always show statusline
vim.opt.shortmess:append("c")   -- Don't pass messages to |ins-completion-menu|
vim.opt.wildmenu = true         -- Enhanced command-line completion
vim.opt.cmdheight = 1           -- Height of the command bar
vim.opt.conceallevel = 0        -- Show text normally
vim.opt.pumheight = 10          -- Maximum number of items to show in popup menu

-- NEW: Enhanced visual settings
vim.opt.cursorcolumn = false    -- Don't highlight cursor column (can be distracting)
vim.opt.colorcolumn = "80,120"  -- Show vertical lines at 80 and 120 characters
vim.opt.list = true             -- Show invisible characters
vim.opt.listchars = {
  tab = "→ ",                   -- Show tabs as arrows
  trail = "•",                  -- Show trailing spaces as dots
  extends = "»",                -- Show when line continues beyond screen
  precedes = "«",               -- Show when line starts before screen
  nbsp = "␣",                   -- Show non-breaking spaces
}

-- Better splitting behavior
vim.opt.splitbelow = true       -- Open horizontal splits below current window
vim.opt.splitright = true      -- Open vertical splits to the right of current window

-- Enhanced command line
vim.opt.wildmode = "longest:full,full"  -- Better command completion
vim.opt.wildoptions = "pum"     -- Use popup menu for command completion

-- Better mouse support (optional)
vim.opt.mouse = "a"             -- Enable mouse in all modes
vim.opt.mousemodel = "popup"    -- Right click opens popup menu

-- Improved text rendering
vim.opt.smoothscroll = true     -- Smooth scrolling (Neovim 0.10+)
vim.opt.foldlevelstart = 99     -- Start with all folds open

-- Indent settings (only visual - doesn't affect file content)
vim.opt.smartindent = true      -- Smart autoindenting when starting a new line
vim.opt.expandtab = true        -- Use spaces instead of tabs
vim.opt.shiftwidth = 2          -- Number of spaces to use for autoindent
vim.opt.tabstop = 2             -- Number of spaces a tab counts for
vim.opt.softtabstop = 2         -- Edit as if tabs are this many spaces

-- Enhanced fill characters
vim.opt.fillchars = {
  eob = " ",                    -- No ~ for empty lines at end of buffer
  vert = "│",                   -- Prettier window separator
  vertleft = "┤",               -- Left vertical separator
  vertright = "├",              -- Right vertical separator  
  horiz = "─",                  -- Horizontal separator
  horizup = "┴",                -- Horizontal up separator
  horizdown = "┬",              -- Horizontal down separator
  verthoriz = "┼",              -- Cross separator
  fold = "·",                   -- Prettier fold indicator
  foldopen = "▾",               -- Prettier fold open indicator
  foldsep = "│",                -- Prettier fold separator
  foldclose = "▸",              -- Prettier fold closed indicator
  diff = "░",                   -- Deleted lines in diff
}

-- Define the custom colorscheme
local function create_custom_theme()
  -- Clear any existing highlights
  vim.cmd("highlight clear")

  -- Set the colorscheme name
  vim.g.colors_name = "custom_theme"

  -- Define highlight groups
  local highlights = {
    -- UI elements
    Normal = { fg = colors.white, bg = colors.black },
    NormalFloat = { fg = colors.white, bg = colors.gray2 },
    LineNr = { fg = colors.gray3 },
    CursorLine = { bg = colors.gray2 },
    CursorLineNr = { fg = colors.blue, bold = true },
    
    -- NEW: Enhanced UI elements
    ColorColumn = { bg = colors.gray2 },
    SignColumn = { bg = colors.black },
    FoldColumn = { fg = colors.gray3, bg = colors.black },
    
    -- Invisible characters
    Whitespace = { fg = colors.gray3 },
    NonText = { fg = colors.gray3 },
    SpecialKey = { fg = colors.gray3 },

    -- Window borders and splits
    VertSplit = { fg = colors.border, bg = colors.border },
    WinSeparator = { fg = colors.gray3 }, -- For newer Neovim versions

    -- Status line
    StatusLine = { fg = colors.white, bg = colors.gray3 },
    StatusLineNC = { fg = colors.gray4, bg = colors.gray2 },

    -- Command line
    MsgArea = { fg = colors.white, bg = colors.black },
    MsgSeparator = { fg = colors.gray3, bg = colors.black },

    -- Search
    Search = { fg = colors.black, bg = colors.yellow },
    IncSearch = { fg = colors.black, bg = colors.orange },
    CurSearch = { fg = colors.black, bg = colors.orange, bold = true }, -- Current search match

    -- Visual selection
    Visual = { bg = colors.gray3 },
    VisualNOS = { bg = colors.gray3 },

    -- Matching brackets
    MatchParen = { fg = colors.orange, bold = true, underline = true },

    -- Syntax highlighting
    Comment = { fg = colors.gray4, italic = true },
    String = { fg = colors.green },
    Number = { fg = colors.orange },
    Function = { fg = colors.blue },
    Keyword = { fg = colors.pink },
    Identifier = { fg = colors.white },
    Statement = { fg = colors.pink },
    Type = { fg = colors.yellow },
    Special = { fg = colors.orange },
    Constant = { fg = colors.orange },
    Operator = { fg = colors.blue },
    PreProc = { fg = colors.pink },
    
    -- NEW: Enhanced syntax highlighting
    Boolean = { fg = colors.orange, bold = true },
    Character = { fg = colors.green },
    Conditional = { fg = colors.pink },
    Exception = { fg = colors.red },
    Include = { fg = colors.blue },
    Label = { fg = colors.yellow },
    Repeat = { fg = colors.pink },
    StorageClass = { fg = colors.yellow },
    Structure = { fg = colors.yellow },
    Tag = { fg = colors.red },
    Typedef = { fg = colors.yellow },

    -- Diagnostics with better visibility
    DiagnosticError = { fg = colors.red },
    DiagnosticWarn = { fg = colors.yellow },
    DiagnosticInfo = { fg = colors.blue },
    DiagnosticHint = { fg = colors.green },
    
    -- NEW: Diagnostic signs and virtual text
    DiagnosticSignError = { fg = colors.red, bg = colors.black },
    DiagnosticSignWarn = { fg = colors.yellow, bg = colors.black },
    DiagnosticSignInfo = { fg = colors.blue, bg = colors.black },
    DiagnosticSignHint = { fg = colors.green, bg = colors.black },
    
    DiagnosticVirtualTextError = { fg = colors.dark_red },
    DiagnosticVirtualTextWarn = { fg = colors.orange },
    DiagnosticVirtualTextInfo = { fg = colors.dark_blue },
    DiagnosticVirtualTextHint = { fg = colors.dark_green },

    -- Diff with better contrast
    DiffAdd = { fg = colors.green, bg = colors.dark_green },
    DiffChange = { fg = colors.blue, bg = colors.dark_blue },
    DiffDelete = { fg = colors.red, bg = colors.dark_red },
    DiffText = { fg = colors.white, bg = colors.blue },

    -- Pmenu (completion menu) with better visibility
    Pmenu = { fg = colors.white, bg = colors.gray2 },
    PmenuSel = { fg = colors.black, bg = colors.blue },
    PmenuSbar = { bg = colors.gray3 },
    PmenuThumb = { bg = colors.gray4 },
    PmenuKind = { fg = colors.orange, bg = colors.gray2 },      -- Kind field
    PmenuKindSel = { fg = colors.black, bg = colors.blue },     -- Selected kind
    PmenuExtra = { fg = colors.gray4, bg = colors.gray2 },      -- Extra info
    PmenuExtraSel = { fg = colors.gray2, bg = colors.blue },    -- Selected extra

    -- NEW: Folding
    Folded = { fg = colors.gray4, bg = colors.gray2, italic = true },
    
    -- NEW: Spell checking
    SpellBad = { undercurl = true, sp = colors.red },
    SpellCap = { undercurl = true, sp = colors.blue },
    SpellLocal = { undercurl = true, sp = colors.yellow },
    SpellRare = { undercurl = true, sp = colors.orange },

    -- NEW: Tabs
    TabLine = { fg = colors.gray4, bg = colors.gray2 },
    TabLineFill = { bg = colors.gray2 },
    TabLineSel = { fg = colors.white, bg = colors.gray3, bold = true },

    -- NEW: Better error/warning highlighting
    ErrorMsg = { fg = colors.red, bold = true },
    WarningMsg = { fg = colors.yellow, bold = true },
    MoreMsg = { fg = colors.green, bold = true },
    Question = { fg = colors.blue, bold = true },
  }

  -- Apply highlights
  for group, settings in pairs(highlights) do
    vim.api.nvim_set_hl(0, group, settings)
  end
end

-- Apply the custom theme
create_custom_theme()

-- NEW: Auto-commands for better visual experience
local augroup = vim.api.nvim_create_augroup("VisualEnhancements", { clear = true })

-- Highlight yanked text briefly
vim.api.nvim_create_autocmd("TextYankPost", {
  group = augroup,
  pattern = "*",
  callback = function()
    vim.highlight.on_yank({ higroup = "IncSearch", timeout = 150 })
  end,
})

-- Show cursor line only in active window
vim.api.nvim_create_autocmd({ "VimEnter", "WinEnter", "BufWinEnter" }, {
  group = augroup,
  pattern = "*",
  callback = function()
    vim.opt_local.cursorline = true
  end,
})

vim.api.nvim_create_autocmd("WinLeave", {
  group = augroup,
  pattern = "*",
  callback = function()
    vim.opt_local.cursorline = false
  end,
})

-- Automatically resize splits when terminal is resized
vim.api.nvim_create_autocmd("VimResized", {
  group = augroup,
  pattern = "*",
  callback = function()
    vim.cmd("wincmd =")
  end,
})

-- NEW: Better diagnostic configuration
vim.diagnostic.config({
  virtual_text = {
    prefix = "●", -- Could be '■', '▎', 'x', '●'
    source = "if_many",
  },
  signs = true,
  underline = true,
  update_in_insert = false,
  severity_sort = true,
  float = {
    border = "rounded",
    source = "always",
    header = "",
    prefix = "",
  },
})

-- ============================================================================
-- NO CUSTOM KEYBINDINGS - All default Neovim keybindings are preserved
-- ============================================================================
-- This configuration only adds visual improvements and commands
-- All standard keyboard shortcuts (hjkl, :w, :q, etc.) remain unchanged

-- Define command to refresh the theme
vim.api.nvim_create_user_command('RefreshTheme', function()
  create_custom_theme()
  vim.notify('Theme refreshed!')
end, {})

-- NEW: Toggle functions for visual elements
vim.api.nvim_create_user_command('ToggleList', function()
  vim.opt.list = not vim.opt.list:get()
  vim.notify('Invisible characters: ' .. (vim.opt.list:get() and 'ON' or 'OFF'))
end, {})

vim.api.nvim_create_user_command('ToggleColorColumn', function()
  if vim.opt.colorcolumn:get()[1] then
    vim.opt.colorcolumn = ""
    vim.notify('Color column: OFF')
  else
    vim.opt.colorcolumn = "80,120"
    vim.notify('Color column: ON')
  end
end, {})
