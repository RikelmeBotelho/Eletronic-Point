export const savePointRegister = async (pointRegister) => {
  
  try {

    const pointRegisterJson = JSON.stringify(pointRegister);
    
    await AsyncStorage.setItem('myPointRegister', pointRegisterJson);

    console.log("Dados de registro de ponto salvos!")

  } catch (e) {

    console.log("error: " + e.message)

  }

};