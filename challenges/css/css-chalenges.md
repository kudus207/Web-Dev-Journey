em
rem
vh
vw
<!-- box-shadow -->
box-shadow: 0 5px 15px black;
            This adds a shadow effect around the container. The values control the horizontal offset, vertical offset, blur radius, and color respectively.
<!-- transform -->
transform: The transform property can transform the element look. For example, giving it a value of scale(0.9)        would make the element 10% smaller.

            Example Code
            p {
            transform: scale(0.9);
            }
<!-- transform skewX -->
Another value that can be used for the transform property is skewX, this function skews the element             
        horizontally.
<!-- transition -->
transition: transform 0.3s, background-color 0.3s ease;
            When the a elements are hovered, the color of the background makes a transition to a different color. You can regulate how that transition happens with the transition property:
            a {
            transition: color 1s linear;
            }
            The values that the transition property accepts are, in order, the property that the transition is applied to, the duration of the transition, and then the timing.

            If there are multiple properties that have a transition, you can write the values for each separated by a comma:

            Example Code
            p {
            transition: property1 0.1s, property2 0.6s linear;
            }
            If a value is omitted, like the timing for the first property, a default value is applied.

<!-- outlined -->
.card-links a:focus {
            outline: 2px solid yellow
            }  

<!-- STYLING RADIO BUTTON -->
.contact-method-radio-btn {
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid gray;
  vertical-align: bottom;
}
.contact-method-radio-btn::before {  A pseudo-element like <!-- ::before --> lets you insert extra content 
                                     before the actual element. This is often used for decorative purposes.
  display: block;
  content: " ";
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transform: translate(3px, 3px) scale(0); The translate function moves the circle slightly, shrinks it to zero 
                                           size so it’s hidden by default.
  transition: all 0.3s ease-in; create a smooth animation when it appears. This means any style change will 
                                animate over 0.3 seconds, starting slowly and speeding up.
}