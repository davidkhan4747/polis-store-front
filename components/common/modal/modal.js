import {
  ModalB,
  PoUp,
  Parent,
  Ix,
  Item
} from './modal.e'
import { Checkbox   } from '@mui/material';
import {  useState } from 'react';
const  Modal = ({ active, setActive , children , title}) => {
  const [isShow , setShow ] = useState(false)
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [coun  ,setCou] = useState('uz')

 

 
  return (
    <Parent>
      <ModalB
        className={active ? "modal active" : "modal"}
        onClick={() => setActive(false)}
      >
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <PoUp>
            <Ix onClick={()=>setActive(false)}>X</Ix>
              <Item>
                <h2>{title}</h2>
                <div>
                {children}
                </div>

              </Item>
          
          </PoUp>
          
        </div>
      </ModalB>
    </Parent>
    
  );
}
export default Modal 