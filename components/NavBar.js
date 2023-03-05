import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function NavBar(props) {
    return (
        <Tab.Navigator  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <Tab.Screen name="Plants" component={props.home} />
            <Tab.Screen name="Tracker" component={props.settings} />
        </Tab.Navigator>
    );
}

export default NavBar;