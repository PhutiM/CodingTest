import React, {Component} from 'react';
import { Text , View, Button} from 'react-native';

state = {
  name = "",
  time= "",
  count= 0
}

class App extends Component{

componentDidMount(){
   console.log(this.displayName, Date.now())

}

buttonOnPress(){
  this.setState({count: this.count + 1})
}

render(){ 

<View>
   <Text>{this.count}</Text>
   <Button onPress={buttonOnPress}></Button>
</View>
  }
}   

export default App;