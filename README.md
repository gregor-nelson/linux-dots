# Linux Dotfiles 

### **Window Management**
- **DWM (Dynamic Window Manager)** - Lightweight, efficient tiling window manager
- **Picom Compositor** - Modern effects with blur, transparency, rounded corners, and smooth animations
- **Custom Status Bar** - Real-time system monitoring with color-coded modules

### **Theming**
- **One Dark Theme** - Consistent dark theme across all applications
- **Complete Desktop Coverage** - GTK2/3, GNOME Shell, Metacity, XFWM4, Unity themes included
- **JetBrains Mono Nerd Font** - Beautiful programming font with icon support
- **4+ Rofi Themes** - Multiple launcher themes (One Dark, Nord, Gruvbox, Forest)

### **Configured Applications**

#### **Core Tools**
- **Neovim** - Enhanced with One Dark colorscheme and LSP support
- **LF File Manager** - Fast terminal file manager with image previews
- **Rofi** - Elegant application launcher and menu system
- **Redshift** - Blue light filter for eye comfort

#### **System Monitoring**
- **Status Bar Modules:**
  - CPU usage and temperature monitoring
  - Memory usage tracking
  - Network statistics (upload/download speeds)
  - WiFi/Ethernet connection status
  - Volume control with visual indicators
  - Package update notifications (Arch Linux)
  - Date and time display

### **Key Highlights**

#### **Performance & Efficiency**
- Minimal resource usage with DWM's lightweight design
- Fast application launching with Rofi
- Efficient file management with LF + image previews
- Optimized for keyboard-driven workflows

#### **Visual Polish**
- Cohesive One Dark color scheme throughout
- Smooth animations and modern compositor effects
- Beautiful rounded corners and blur effects
- Professional-grade typography with Nerd Font icons

#### **Developer-Friendly**
- Neovim configured for coding with LSP support
- Terminal-centric workflow optimization
- Git-friendly dotfiles structure
- Easy theme switching capabilities

## **System Requirements**

- **OS**: Arch Linux (adaptable to other distributions)
- **Display Server**: X11
- **Audio**: PulseAudio or PipeWire
- **Dependencies**: JetBrains Mono Nerd Font, ueberzug, fzf, pulsemixer

## **Structure**

```
├── config/          # Application configurations (XDG standard)
│   ├── nvim/        # Neovim setup with One Dark theme
│   ├── lf/          # LF file manager with image previews
│   ├── rofi/        # Launcher themes and configuration
│   ├── picom/       # Compositor effects and rules
│   └── redshift/    # Blue light filter settings
├── themes/One-Dark/ # Complete desktop theme package
├── bar/             # DWM status bar system
└── local/bin/       # Custom utilities and DWM source
```


