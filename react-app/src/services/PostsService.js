import request from './BaseService'
import { constants } from '../shared/constants'

function getAll() {
    return request({
        url: constants.paths.posts + '?size=10',
        method: 'GET',
    })
}

function get(id) {
    return request({
        url: constants.paths.postDetails.replace(
            '{id}',
            id ? id.toString() : ''
        ),
        method: 'GET',
    })
}

const PostsService = {
    getAll,
    get,
    // create, update, delete, etc. ...
}

export default PostsService
