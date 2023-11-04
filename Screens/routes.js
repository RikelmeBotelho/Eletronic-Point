import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Principal from "./Principal";
import Config from "./config";
import RelatorioADM from "./RelatorioADM";

const Tab = createBottomTabNavigator();

function routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Principal} />

            <Tab.Screen name="Relatorio" component={RelatorioADM} />
 
            <Tab.Screen name="Configurações" component={Config} />
        </Tab.Navigator>
    )
}

export default routes;