import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
};

/**
* Material UI Tabs

* A navigációs sávnál lévő vonal animáció
@returns {React.Component} - MuiTabs componens
* * Validálva
*/
export default function MuiTabs() {
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function handleClickScroll(value) {
    const element = document.getElementById({value});
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

  return (
    <div className="collapse navbar-collapse 
                    justify-content-end" >
      <div className='d-none d-xl-block '>
        <Box sx={{ width: '100%' }} mx="0">
          <Tabs 
            value={value} 
            onChange={handleChange} 
            aria-label="nav tabs"
            scrollButtons="auto"
            variant="scrollable">
            <LinkTab 
              label="Bemutatkozás" 
              href="/#introduction"  
              onClick={handleClickScroll('introduction')} 
            />
            <LinkTab 
              label="Szaktudás" 
              href="/#skills" 
              onClick={handleClickScroll('skills')}
            />
            <LinkTab 
              label="Tapasztalat" 
              href="/#experience" 
              onClick={handleClickScroll('experience')}
            />
            <LinkTab 
              label="Munkahelyek" 
              href="/#workplaces" 
              onClick={handleClickScroll('workplaces')} 
            />
            <LinkTab 
              label="Tanulányok" 
              href="/#studies"  
              onClick={handleClickScroll('studies')}
            />
            <LinkTab 
              label="Kapcsolat" 
              href="/#contact"  
              onClick={handleClickScroll('contact')}/>
          </Tabs>
        </Box>
      </div>
    </div>
  );
}