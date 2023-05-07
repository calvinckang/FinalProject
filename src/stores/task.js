import { defineStore } from "pinia";
import supabase from '@/supabase/index';
import userStore from '@/stores/user';

export default defineStore('tasks', {
    state: () => ({
        tasks: [],
    }),
    getters: {
        tasksByInsertedDate() {
            return this.tasks.sort((a, b) => (a.inserted_at > b.inserted_at ? -1 : 1));
        },
    },
    actions: {
        async _fetchTasks() {
            try {
                const { data, error } = await supabase
                    .from('tasks')
                    .select('*')
                    .order('id', { ascending: false });    
                this.tasks = tasks.map((task) => ({
                    ...task,
                    inserted_at: new Date(task.inserted_at).toLocaleDateString(),
                }));
                if (error) {
                    throw error;
                }

                console.log(data)

                this.taskStore = data;
            } catch(err) {
                console.error(err);
            }
        },
        async _addNewTask({ title, userId }) {
            const { data, error } = await supabase
                .from('tasks')
                .insert({ title, user_id: userId })
                .select();
            if (error) {
                console.error(error);
                return;
            }
            if (data.length) {
                this.tasks.push({
                    ...data[0],
                    inserted_at: new Date(data[0].inserted_at).toLocaleDateString(),
                });
            }

            console.log('New task ->', data)

            this.taskStore.push(...data)
        }
    }
})