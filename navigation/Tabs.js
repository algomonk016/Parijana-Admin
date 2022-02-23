import React from "react";
import {
    View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AddDocument, Explore, Home, Profile } from '../screens'
import { COLORS, icons, tabs } from "../constants";
import { TabIcon } from "../components";

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions= {{
                tabBarShowLabel:false,
                headerShown: false,
                tabBarStyle: {
                    position: 'relative',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 5,
                    backgroundColor: COLORS.white,
                    borderTopColor: COLORS.transparent,
                    height: 60,
                },
            }}
        >
            <Tab.Screen
                name={tabs.HOME}
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused = {focused} icon = {icons.home} />,
                    tabBarBadge: 3
                }}
            />
            <Tab.Screen
                name={tabs.SEARCH}
                component={Explore}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused = {focused} icon = {icons.search} />
                }}
            />
            <Tab.Screen
                name={tabs.ADD_PAPERS}
                component={AddDocument}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused = {focused} icon = {icons.bookmark} />
                }}
            />
            <Tab.Screen
                name={tabs.PROFILE}
                component={Profile}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused = {focused} icon = {icons.profile} />
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs