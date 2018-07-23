import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },

  displayContainer: {
    flex: 2,
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },

  displayText: {
    color: 'black',
    fontSize: 36,
    fontWeight: 'normal',
    textAlign: 'right',
    padding: 20,
  },

  inputContainer: {
    flex: 4,
    backgroundColor: '#FFF',
  },

  inputButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#0EDBE5',
  },

  inputButtonRow: {
    flex: 1,
    flexDirection: 'row',
  },

  inputButtonHighlighted: {
    backgroundColor: '#193441',
  },

  inputButtonText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'black',
  },

  inputRow: {
    flex: 1,
    flexDirection: 'row',
  },
});



export default Style;






Перебрать числа от 1 до 20 
Если число делится на 3, выведите "Julia" 
Если число делится на 5, выведите "James" 
Если число делится на 3 и 5, выведите "JuliaJames" 
Если число не делится на 3 или 5, выведите число