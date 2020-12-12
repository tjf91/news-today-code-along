
import {createStore,applyMiddleware, combineReducers} from 'redux'
import hackerNewsReducer from '../ducks/hackerNewsReducer'
import mediumReducer from '../ducks/mediumReducer'
import promiseMiddleware from 'redux-promise-middleware'
import {composeWithDevTools} from 'redux-devtools-extension'
import redditReducer from '../ducks/redditReducer'

const rootReducer = combineReducers({
    hacker:hackerNewsReducer,
    medium:mediumReducer,
    reddit:redditReducer,
})





export default createStore(rootReducer,composeWithDevTools(applyMiddleware(promiseMiddleware)))