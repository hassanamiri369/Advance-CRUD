import {v4 as uuidv4} from "uuid"

export const Reducer = (state , action)=>{
    switch(action.type){
        

        case "addTodo":
            // این برای زمانیه که اینپوت خالی بود اد نکنه 
            if(!action.payload){
                return state
            }

            // findIndex   : اگر جوابش فالس باشه به ما منفی یه یک میده    action.payload == text  input
            if(state.todos.findIndex((t) => t.text === action.payload) > -1){  
                return state       // این یعنی اگر متنی که میخواد اد کنه نمونه ش بود توی تو دو  ها نمی خواد اد کنی 
            }

            // action.payload == text  input
            const newTodo = { id : uuidv4() ,  text : action.payload, complete : false }
            const addedTodo = [...state.todos , newTodo];   //  میگه که هرجی ابحکت توی ارایه ی تو دو هست رو کپی کن این ابحکت جدید رو هم بهش اضافه کن 
            return {...state , todos : addedTodo}   // هرچی توی استیت هست رو برگردون توی ما رو هم بهش اضافه کن 

            
            // dispatch({type : "editTodo" , payload : todo})
            // الان کل یه ابجکت اومده این طرف :   {id : 5 , text : "python" , complete : false} == todo == action.payload

        case "toggleTodo" :
        const toggleTodos = state.todos.map((t)=> t.id === action.payload.id ? {...action.payload ,
            /*  این یعنی هرجی داخل اون یه دونه ابجکت بود رو برگدون */
           complete :!action.payload.complete /*  ققط کامپلیتش رو برعکس اون چیزی که هست بزار */ } : t)

        // action.payload.id    ===> todo.id   == todo : {id : 5 , text : "python , complete : false"}
            return {...state , todos : toggleTodos}


        case "removeTodo" :
            const isRemovedTodo = state.currentTodo.id === action.payload.id ? {} : state.currentTodo;

            // اینم میگه اگر کابرد اومد و دکمه ادیت رو زدم و اطاعات اون ابحکت رفت توی اینپوت و هم زمان رفت توی کانرنت تودو 
            // ولی قبل از اینکه بیاد ادیت کنه دکمه ی دیلیت رو زد 
            // با اون رو که هم زمان داری از توی لیست تودوی اصلی حذف میکنی 
            // بیا از توی کارنت تودو هم حذفش کن === برای حذف کردن هم کافیه مقدار جدید کارنت تودو رو بزاری برابر با یه ابحکت خالی

            const filterTodos = state.todos.filter((t) => t.id !== action.payload.id)
            return {...state , currentTodo : isRemovedTodo ,todos : filterTodos}


            case "deleteAll" :
                return {...state , todos : [] , currentTodo : {}}


        case "setCurrentTodo":
            // action.payload == todo  = {id : 5 , text : "python , complete : false"}
            return {   // اون ابحکتی رو که کاربرد میخواد ادیت کنه رو میگیریم میریزیم توی کارنت تو دو مون که بعدا بریم ادیتش کنیم 
                ...state , currentTodo : action.payload,
            }    


        case "updateTodo":
        // میگه اگر خالی بود اد نکن 
            if(!action.payload){      // action.payload ===  <input text 
                return state
            }
              // این برای زمانی یه که اگر متنی مثل متنی که اد شده بود رو اد نکنه 
            if(state.todos.findIndex((t) => t.text === action.payload) > -1){
                return state  //  اینم میگه برو توی تودولیست اصلی مون توی تکست هاش بگرد اگر جیزی که کاربر وارد کرد عین ش رو داشتم اد نکن
            }
            // ابجکت رو اپدیت کردیم 
             const updatedTodo = {...state.currentTodo , text : action.payload}  // همه ی موارد توی اون ابحکت رو کپی کن و فقط تکست ش رو تغییر بده 
             // ایندکسش رو از توی تودولیست اصلی پیدا کردیم تا بتونیم قدیم رو با جدید جایگزین کینم 
             const updatedTodoIndex = state.todos.findIndex((t)=> t.id === state.currentTodo.id)  // حالا بیا بر اساس ایدی دوباره همین ابحکتی رو که تغییرش دادی رو توی لیست تو دو ها پیدا کن 
             // جایگزین کردیم 
             const updatedTodos = [...state.todos.slice(0 , updatedTodoIndex) , updatedTodo , ...state.todos.slice(updatedTodoIndex + 1)] // حالا که پیدا کردی بیا ابحکت جدید رو با قدیمی یه حایگزین کن 
             return {
                 ...state, currentTodo : {} , todos : updatedTodos    // حال که جایگزین کردی بیا داخل اون ابحکت فلگ رو خالی کن تا برای اپدیت بعدی اماده بشه 
             }
        default : 
        return state
    }
}