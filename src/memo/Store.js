import { createStore } from 'redux';

const initData={
    data:[{message:'sample data'}],
    dream:'Pls Type yourdream.',
    mode:'default',
    fdata:[],
}
export function memoReducer(state=initData,action){ 
    switch(action.type){
        case 'ADD':
            return addRecuce(state,action);
        case 'DELETE':
            return deleteRecuce(state,action);
        case 'FIND':
            return findRecuce(state,action);

        default:
            return state;

    
    }
}

function addRecuce(state,action){
    let data={
        dream:action.dream,
    };
    let newdata =state.data.slice();
    newdata.unshift(data);
    return {
        data:newdata,
        dream:'Added!',
        mode:'default',
        fdata:[],
        };
}

function findRecuce(state,action){
    let newdata =state.data.slice();//added ore
    let f =action.find;
    let fdata=[];
    state.data.forEach((value)=>{
        if(value.dream.indexOf(f)>=0){
            fdata.push(value);
        }
    });
    return {
        data:newdata,
        dream:'find "' + f + '" :',
        mode:'find',
        fdata:[],
        };
    }
function deleteRecuce(state,action){
    let newdata =state.data.slice();
    newdata.splice(action.index,1);
    return {
        data:newdata,
        dream:'delete "' + action.index + '" :',
        mode:'default',
        fdata:[],
        };
    }

export function addMemo(text){
    return{
        type:'ADD',
        message:text
    }
}
export function deleteMemo(num){
    return{
        type:'DELETE',
        message:num
    }
}
export function findMemo(text){
    return{
        type:'FIND',
        message:text
    }
}



export default createStore(memoReducer);