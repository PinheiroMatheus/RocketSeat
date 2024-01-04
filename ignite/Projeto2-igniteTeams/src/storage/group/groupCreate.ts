import AsyncStorage from "@react-native-async-storage/async-storage";
import { groupsGetAll } from "@storage/groupsGetAll";

import { GROUP_COLECTION } from "@storage/storageConfig";

export async function groupCreate(newGroup: string) {
    try {
        const storedGroups = await groupsGetAll();

        const storage = JSON.stringify([...storedGroups, newGroup])

        await AsyncStorage.setItem(GROUP_COLECTION, storage)
    } catch (error) {
        throw error;
    }
}