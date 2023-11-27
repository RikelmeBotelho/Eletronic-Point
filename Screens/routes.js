import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Principal from "./Principal";
import Config from "./config";
import RelatorioADM from "./RelatorioADM";
import Cadastro from "./Cadastro";
import TelaADM from "./TelaADM";

const Tab = createBottomTabNavigator();

function routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Principal} />

            <Tab.Screen name="RelatorioADM" component={RelatorioADM} />
 
            <Tab.Screen name="Configurações" component={Config} />
            
            <Tab.Screen name="Cadastro" component={Cadastro} />

            <Tab.Screen name="TelaADM" component={TelaADM} />
        </Tab.Navigator>
    )
}

export default routes;