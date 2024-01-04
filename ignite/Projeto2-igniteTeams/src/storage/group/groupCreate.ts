import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLECTION } from "@storage/storageConfig";

export async function groupCreate(newGroup: string) {
    try {
        await AsyncStorage.setItem(GROUP_COLECTION, newGroup)
    } catch (error) {
        throw error;
    }
}