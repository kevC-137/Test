//This function creates and selects which Button gets Shnazz Filter
(function() {

//Varibles all posible
let pushIt = document.querySelectorAll(".button, button, .no-shnazz");
//Set true to making sure loop starts plays
let useGradient = true;


    if (useGradient) {
      for (var i = 0; i < pushIt.length; i++) {
        if (pushIt[i].classList.contains("no-shnazz")) {

        } else  {
              pushIt[i].style.cssText = "padding: 10px; font-family: 'Open Sans' , sans-serif; font-size: 12px; text-decoration : none; color : #fff; border: solid 1px #186f8f; -webkit-box-shadow : inset 0px 1px 0px #7fd2f1, 0px 1px 0px #fff; border-radius : 5px; cursor : pointer;";
              let wrapper = document.createElement('div');
              wrapper.style.cssText = "text-align: center; display:inline-block; background-color:#ccd0d5; float: left; clear: none;margin: 5px; ;z-index:-1; padding: 8px; border-radius: 5px;-webkit-box-shadow: inset 0px 1px 1px #909193, 0px 1px 0px #fff;";
              let shnazzersGradient = "-webkit-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%)";

              // insert wrapper in the DOM tree
              pushIt[i].parentNode.insertBefore(wrapper, pushIt[i]);

              // wrappering in the DOM tree
              wrapper.appendChild(pushIt[i]);

            // wrappering in the DOM tree
              const colorCheck = function() {
                  if (pushIt[i].hasAttribute("data-color")) {
                  useGradient = false;
                  var setColor = pushIt[i].getAttribute("data-color");
                  pushIt[i].style.backgroundColor = setColor;

                  function pushed() {this.style.padding = "11px 10px 9px 10px"; this.style.top = "1px";};
                  function unPushed() {this.style.padding = "10px"; this.style.top = "0px";};

                  pushIt[i].addEventListener("mouseenter", pushed, false);
                  pushIt[i].addEventListener("mouseleave", unPushed, false);
                }
                else {
                  pushIt[i].style.backgroundImage = shnazzersGradient;
                  pushIt[i].style.borderColor = "#186f8f";

                  let hoverGradient = "-webkit-linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%)";

                  function pushed() {this.style.padding = "11px 10px 9px 10px"; this.style.top = "1px"; this.style.backgroundImage = hoverGradient;};
                  function unPushed() {this.style.padding = "10px"; this.style.top = "0px"; this.style.backgroundImage = shnazzersGradient;};

                  pushIt[i].addEventListener("mouseenter", pushed, false);
                  pushIt[i].addEventListener("mouseleave", unPushed, false);
                }
            }();
      };
    }

  };
})();
