import React, { useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import ConfettiExplosion from 'react-confetti-explosion';
import './App.css';

const App = () => {
  const [display, setDisplay] = useState('');
  const [confetti, setConfetti] = useState(false);

  const handleButtonClick = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      setDisplay('');
    } else {
      setDisplay(prev => prev + value);
    }
  };

  const calculateResult = () => {
    try {
      const evalResult = eval(display.replace('×', '*').replace('÷', '/'));
      setDisplay(evalResult.toString());
      if (display.includes('5') && display.includes('6')) {
        setConfetti(true);
        setTimeout(() => setConfetti(false), 3000);
      }
    } catch (error) {
      setDisplay('Error');
    }
  };

  const buttons   =  [ 
    '(', ')', 'mc', 'm+', 'm-', 'mr', 'C', '+/-', '%', '÷',
    '2nd', 'x²', 'x³', 'xʸ', 'eˣ', '10ˣ', '7', '8', '9', '×',
    '¹/x', '²√x', '³√x', 'ʸ√x', 'ln', 'log₁₀', '4', '5', '6', '-',
    'x!', 'sin', 'cos', 'tan', 'e', 'EE', '1', '2', '3', '+',
    'Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand','History', '0', '.', '='
  ];

  return (
    <div>
      <h1><b>Confetti Calculator</b></h1>
      <Box className="calculator">
        <Typography variant="h4" className="display">{display || '0'}</Typography>
        <Grid container spacing={0}>
          {buttons.map((btn, index) => (
            <Grid item xs={btn === '0' ? 1.2 : 1.2} key={index}>
              <Button
                variant="contained" 
                onClick={() => handleButtonClick(btn)} 
                className = {`button ${['+','-', '×', '÷','='].includes(btn)  ? 'operation' : ''} ` }
              >
                {btn}
              </Button>
            </Grid>
          ))}
        </Grid>
        {confetti && <ConfettiExplosion />}
      </Box>
    </div>
  );
};

export default App;
