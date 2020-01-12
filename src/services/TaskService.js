import firestore, { firebase } from '@react-native-firebase/firestore'

const ref = firestore().collection('tasks')

const TaskService = {
    async add(description) {
        await ref.add({
            created_at: new Date(),
            description: description,
            done: false
        })
    },
    async update(id, data) {
        await ref.doc(id)
            .update(data)
    }
}

export default TaskService