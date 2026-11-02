import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
		background: {
			default: "#060010"
		},
		focused: {
			color: "#1D1916"
		}
  },
  typography: {
    fontFamily: "'Poppins', sans-serif"
  },
	focused: {
		color: "#1D1916",
	},
  components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					boxShadow: "none",
					padding: 0,
					backgroundColor: "transparent"
				},
			}
		},
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
		MuiChip: {
			styleOverrides: {
				root: {
					fontSize: "10px",
					textTransform: "uppercase",
				}
			}
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					border: "0",
					borderRadius: "8px",
					"&.Mui-focused": {
						color: "#1D1916"
					}
				},
				input: {
					fontSize: "16px",
					lineHeight: "18px",
					color: "#070c1e",
					padding: "16px 12px"
				},
				inputLabel: {
					fontSize: "16px",
					fontWeight: 400,
					color: "#070c1e",
				}
			}
		},
		MuiBackdrop: {
			styleOverrides: {
				root: {
					background: "rgba(6, 0, 16, 0.7)",
					backdropFilter: "blur(9.5px)",
				}
			}
		},
		MuiInput: {
			styleOverrides: {
				root: {
					"&::after": {
						borderColor: "rgba(0, 0, 0, 0.1)",
					}
				}
			}
		},
		MuiInputBase: {
			styleOverrides: {
				root: {
					fontSize: "16px",
					lineHeight: "1.2",
					color: "#000",
					marginTop: "28px !important",
					":after": {
						borderColor: "#fff8f2",
					},
					":before": {
						borderBottom: "1px solid rgba(0, 0, 0, 0.1) !important",
					}
				}
			}			
		},
		MuiFormLabel: {
			styleOverrides: {
				root: {
					fontSize: "16px",
					color: "#000",
					fontWeight: 400,
					transform: "translate(0, -1.5px) scale(1) !important",
					"&.Mui-focused": {
						color: "#000"
					}
				}
			}
		},
		MuiAccordion: {
			styleOverrides: {
				root: {
					boxShadow: "none",
					"&.Mui-expanded": {
						margin: 0,
					}
				}
			}
		},
		MuiAccordionSummary: {
			styleOverrides: {
				content: {
					margin: "20px 0",
				}
			}
		},
		MuiButton: {
			styleOverrides: {
				root: {
					"&:hover": {
						background: "transparent !important",
					}
				}
			}
		},
		MuiCircularProgress: {
			styleOverrides: {
				circleIndeterminate: {
					stroke: "url(#my_gradient)",
				}
			}
		}
  },
});

export default theme;
