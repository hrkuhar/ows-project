import React, { Component } from "react";
import './AboutUsPage.css';

class AboutUsPage extends Component {
  state = {};
  render() {
    return (
      <div className="about-us-page">
        <div className="content-container">
        <div className="logo-container">
              <img className="img-main-logo" src={require("../resources/images/icon-logo-main.png")}></img>
        </div>
        <p className="about-text">
          <br></br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis finibus erat. In hac habitasse platea dictumst. Aliquam vel enim libero. Nam sed laoreet eros. Ut varius, ligula id varius sollicitudin, lectus neque aliquet dui, at tempor turpis ipsum ac nisi. Etiam dictum aliquet lacus, id egestas purus pretium id. Pellentesque eget justo et arcu bibendum molestie. Sed ac augue ac eros pulvinar accumsan sit amet ac nibh. Cras commodo, dolor a congue viverra, sapien dui placerat ex, ac placerat enim orci a neque. Morbi hendrerit vulputate lacus quis vehicula. Nunc eget nisl fermentum, congue dui eu, dignissim ipsum.
<br></br>
<br></br>
Maecenas pretium libero sapien, non fermentum erat faucibus sed. Integer placerat fringilla ante ut gravida. Sed sed dignissim est. Nam rutrum vestibulum purus, a tempus urna elementum id. Etiam ut maximus urna. Proin pharetra sit amet massa quis laoreet. Maecenas sed metus massa. Curabitur velit est, tristique in gravida in, tempor vel lorem. Phasellus nibh quam, sagittis vitae tincidunt nec, fringilla vitae lacus. Nulla posuere libero ornare, convallis orci vel, dictum augue.
<br></br>
<br></br>
Mauris volutpat, nisi sed fringilla porta, orci enim dignissim nisi, vitae ultrices nunc velit tincidunt massa. Praesent massa leo, maximus cursus nibh quis, rhoncus sollicitudin tellus. In quis commodo velit. Cras massa massa, porta rhoncus egestas in, convallis nec ante. Sed viverra odio eu viverra varius. Donec ullamcorper est enim, id maximus enim tincidunt sed. In viverra tortor enim. Maecenas sit amet rhoncus orci. Vivamus sed elit fermentum, hendrerit nunc in, commodo nisi. Sed congue placerat mauris, non venenatis ligula pharetra sit amet. Ut molestie, erat vel ultricies semper, nulla nisl gravida neque, sit amet ultricies lacus leo eu magna.
        <br></br>
        <br></br>
        Ut tristique tempus nibh, et dictum mi posuere at. In ac urna tellus. In hac habitasse platea dictumst. Quisque ac luctus nibh. Aliquam vitae justo eget dui tempor maximus at non ex. Mauris risus eros, fringilla id felis sit amet, molestie ullamcorper tellus. Etiam lectus orci, tempus sit amet lacus eget, sagittis euismod erat. Integer et mauris imperdiet, mattis mauris non, vehicula nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus semper accumsan lacus, non iaculis ex scelerisque ut. Pellentesque eu tempor felis, id congue neque. Etiam maximus nec elit sed sollicitudin. Vivamus quis quam convallis, pulvinar enim a, condimentum metus.
<br></br>
<br></br>
Integer suscipit egestas pharetra. Maecenas sed convallis dui. Vivamus malesuada, diam in ultricies dapibus, sem arcu elementum velit, sit amet elementum metus nisl ut orci. Integer nec mi semper, mattis urna a, gravida enim. Donec sodales laoreet purus quis gravida. Sed pulvinar justo ut magna blandit gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
        </div>
        
      </div>
    )
  }
}

export default AboutUsPage;
