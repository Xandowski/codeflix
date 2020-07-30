import React from 'react';

import { Div, SelectOptions, NewDiv, SelectItems, DivOptions } from './styles';

let newDiv = React.createElement(NewDiv, {});
let selectItems = React.createElement(SelectItems, {});

const Select = () => {
  const hide = {
    display: "none",
  }

  const sameAsSelected = {
    backgroundColor: "gray",
  }

  const selectArrowActive = {

  }

  selectArrowActive.after = {
    borderColor: "transparent transparent #fff transparent",
    top: "7px",
  }


  const customSelect = () =>{
    const divs = document.getElementsByClassName("custom-select");
    const divsLength = divs.length;
    
    for (let i = 0; i < divsLength; i++){
      let select = divs[i].getElementsByTagName("select")[0];
      let selectLength = select.length;

      newDiv.innerHTML = select.options[select.selectedIndex].innerHTML;
      newDiv.setAttribute("class", "select-selected")

      
      selectItems.style.display = "none";
      selectItems.setAttribute("class", "select-items hide");

      for (let j = 0; j < selectLength; j++){
        let divOptions = React.createElement(DivOptions, {});
        divOptions.innerHTML = select.options[j].innerHTML;
        divOptions.addEventListener("click", function(e) {
          let divSelect = this.parentNode.parentNode.getElementsByTagName("select")[0];
          let divSelectLength = divSelect.length;
          let h = this.parentNode.previousSibling;
          for(let i = 0; i < divSelectLength; i++){
            if(divSelect.options[i].innerHTML === this.innerHTML) {
              divSelect.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              let divOptionSelected = this.parentNode.getElementsByClassName({sameAsSelected});
              let divOptionSelectedLength = divOptionSelected.length;
              for(let k = 0; k < divOptionSelectedLength; k++ ) {
                divOptionSelected[k].removeAttribute("class");
              }
              this.setAttribute("class", {sameAsSelected});
              break;
            }
          }
          h.click();
        });
        selectItems.appendChild(divOptions);
      }
      divs[i].appendChild(selectItems);
      newDiv.addEventListener("click", function(e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle({hide});
        this.classList.toggle({selectArrowActive});
      });
    }
    function closeAllSelect(elmnt) {
      let selecteds = [];
      let selectItems = document.getElementsByClassName("select-items");
      let selectSelected = document.getElementsByClassName("select-selected");
      let selectItemsLength = selectItems.length;
      let selectSelectedLength = selectSelected.length;

      for (let i = 0; i < selectSelectedLength; i++) {
        if (elmnt === selectSelected[i]) {
          selecteds.push(i);
        } else {
          selectSelected[i].classList.remove({selectArrowActive});
        }
      }
      for (let i = 0; i < selectItemsLength; i++) {
        if (selecteds.indexOf(i)) {
          selectItems[i].classList.add({hide});
        }
      }
    }
    document.addEventListener("click", closeAllSelect);
  }

  customSelect();
  return (
    <Div className="custom-select">
      <SelectOptions>
        <option value="">Test</option>
        <option value="">Test2</option>
      </SelectOptions>
    </Div>
  )
}

export default Select;