import firestore from '@react-native-firebase/firestore'

const ref = firestore().collection('tasks')

const TaskService = {
    add(description) {
        ref.add({
            created_at: new Date(),
            description: description,
            done: false
        })
    },
    update(id, data) {
        ref.doc(id)
            .update(data)
    }
}

export default TaskService