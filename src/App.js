import React from 'react';
import './App.css';
import Post from './Post/Post';


const max_image = "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png";
const ukraineImage = "https://upload.wikimedia.org/wikipedia/commons/5/5e/Flag_of_Ukraine.jpg";


const App = () => {
   return (
      <div>
         <Post author={{
            name: "Буклів Максим",
            photo: max_image,
            nickname: "@buklivdiana"
         }}
            content="Слава Україні!"
            image={ukraineImage}
            date={"11 лип."}
         />
         
      </div>
   )
}

export default App;
