import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
	name: "todo",
	initialState: {
		todos: [],
		newTodo: [],
		counter: 0
	},
	reducers: {
		addTodo(state,action){
			const text = action.payload;
			state.todos.unshift({
				id:Math.random()*100000000,
				task: text,
				completed: false,
		    })
		    state.newTodo = state.todos;
		},
		completeTodo(state,action){
			const id = action.payload;
			state.todos = state.todos.map((item) => {
				if (item.id === id){
					return{...item, completed:!item.completed}
				}
				return item;
		    })
		    state.newTodo = state.todos;
		},
		deleteTodo(state, action){
			const id = action.payload;
			state.todos = state.todos.filter(item => 
				item.id !== id
			)
			state.newTodo = state.todos;
		},
		countTodo(state){
			state.counter = state.todos.length;
		},
		setAllTodo(state){
			state.newTodo = state.todos
		},
		setCompleteTodo(state){
			state.newTodo = state.todos.filter((item) =>
				item.completed === true
			)
		},
		setActiveTodo(state){
			state.newTodo = state.todos.filter((item) =>
				item.completed === false
			)
		},
		clearCompleteTodo(state){
			state.todos = state.todos.filter((item) => 
				item.completed === false
			)
			state.newTodo = state.todos;
		}
	}
})

export const todoActions = todoSlice.actions;
export default todoSlice;