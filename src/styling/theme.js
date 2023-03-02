

const colors = {
    tealAccent: {
      100: "#A7FFEB",
      200: "#64FFDA",
      400: "#1DE9B6",
      700: "#00BFA5"
    },
    red: {
      50: '#FFEBEE',
      100: '#FFCDD2',
      200: '#EF9A9A',
      300: '#E57373',
      400: '#EF5350',
      500: '#F44336',
      600: '#E53935',
      700: '#D32F2F',
      800: '#C62828',
      900: '#B71C1C',
    },
    green: {
      50: '#E8F5E9',
      100: '#C8E6C9',
      200: '#A5D6A7',
      300: '#81C784',
      400: '#66BB6A',
      500: '#4CAF50',
      600: '#43A047',
      700: '#388E3C',
      800: '#2E7D32',
      900: '#1B5E20',
    },
    blue: {
      50: "#E8EAF6",
      100: "#BBDEFB",
      200: '#9FA8DA',
      300: '#7986CB',
      400: '#5C6BC0',
      500: "#2196F3", 
      600: "#1E88E5",
      700: "#1976D2",
      800: '#283593',
      900: '#1A237E'
    },
    grey: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      350: "#D6D6D6",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      850: "#303030",
      900: "#212121"
    },
    white: '#ffffff',
    black: '#000000',
    alphaWhite: (opacity=1)=>`rgba(255, 255, 255, ${opacity})`,
    alphaBlack: (opacity=1)=>`rgba(0, 0, 0, ${opacity})`,
  };
  
  const primaryColor = colors.blue
  //const secondaryColor = colors.grey
  
  const theme = {
    divider: 'rgba(0, 0, 0, 0.13)',
    colors: {
      primary: primaryColor['500'],
      text: colors.black,
      background: colors.grey['50'],//"rgb(246, 247, 248)",
      secondary: colors.grey['600'],
      tertiary: colors.grey['300'],
      quaternary: colors.grey['200'],
      accent: primaryColor['500'],
      hover: colors.alphaBlack(0.04),
      focus: colors.alphaBlack(0.12),
      error: colors.red[700],
      border: colors.grey[350],
      disabled: colors.alphaBlack(0.38),
      secondaryHeader: primaryColor['50'],
      bottomAppBar: colors.white,
      card: colors.white,
      button: colors.grey['300'],
      ...colors
    },
    breakpoints: ["850px", "1100px", "64em"],
    fonts: {
      system: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol"
      ].join(", "),
      serif: ["Georgia", "serif"].join(", "),
      size: {
        header: '1.2rem'
      }
    },
    padding: {
      horizontal: '40px',
      verticle: '40px',
      left: '25px',
      top: '25px',
      right: '25px',
      bottom: '25px',
      all: '25px'
    },
    margin: {
      horizontal: '5px',
      verticle: '40px',
      left: '20px',
      top: '20px',
      right: '20px',
      bottom: '20px',
      all: '25px'
    }
  };
  

  export {
    colors,
    theme
  }