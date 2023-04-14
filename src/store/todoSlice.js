import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
	name: "todo",
	initialState: {
		todos: []
	},
	reducers: {
		addTodo(state,action){
			const text = action.payload;
			state.todos.push({
				id:Math.random()*100000,
				task: text,
				completed: false
		    })
		},
		completeTodo(state,action){
			const newId = action.payload;
			state.todos.map((item) => {
				if (item.id === newId){
					return{...item, completed: !item.completed}
				}
				return item;
		    })
		},
		deleteTodo(state, action){
			const newId = action.payload;
			state.todos.filter((item) => 
				item.id !== newId
			)
		},
		countTodo(state){
			state.todos.forEach((counter) =>
				counter++
			)
		},
		clearCompleteTodo(state){
			state.todos.filter((item) =>
				item.completed === false
			)
		},
		setCompleteTodo(state){
			const newTodo = state.todos.filter((item) =>
				item.completed === true
			)
		},
		setActiveTodo(state){
			const newTodo = state.todos.filter((item) =>
				item.completed === false
			)
		}
	}
})

export const todoActions = todoSlice.actions;
export default todoSlice;