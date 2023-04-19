import {createSlice} from '@reduxjs/toolkit';
import {db} from '../config/Firebase';
import {getDocs,collection} from 'firebase/firestore';


const todoCollectionRef = collection(db,"Todos");


const todoSlice = createSlice({
	name: "todo",
	initialState: {
		todos: [],
		newTodo: [],
		counter: 0
	},
	reducers: {
		addTodo(state,action){
			const arrivedTodo = action.payload;
			state.todos.unshift(arrivedTodo);
		    state.newTodo = state.todos;
		    console.log(state.todos.id)
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

export const fetchData = () => {
	return async (dispatch) => {
//		const fetchTodos = async () => {
//			
//		}
		try{
			const todo = await getDocs(todoCollectionRef);
			todo.docs.map((doc) => {
				dispatch(todoActions.addTodo(doc.data()));
				console.log(doc.data())
			});
			//console.log(todo.docs[0].data());
			console.log("todos succedd");
		}catch(e){
			console.error(e);
		}
	}
}
export const todoActions = todoSlice.actions;
export default todoSlice;