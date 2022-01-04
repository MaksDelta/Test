const DB = {
    collections: {
        posts: {
            posts_1: {
                name: 'Post 1',
                text: 'Some text 1'
            },
            posts_2: {
                name: 'Post 2',
                text: 'Some text 2'
            },
        },
        comments: {
            comment_1: {
                postId: 'posts_1',
                text: 'Comment 1'
            },
            comment_2: {
                postId: 'posts_2',
                text: 'Comment 2'
            },
        },
    },
};


//task 1:
const useCollection1 = (collectionName) => ((itemName) => {
    console.log({
        id: itemName,
        name: DB.collections[collectionName][itemName].name,
    })
});


//task 2:
const findNextItemNumber = (obj) => {
    const items = Object.keys(obj);
    const numbers = [];

    for (let item of items) {
        numbers.push(item.split('_')[1]);
    }
    return Math.max(...numbers) + 1;
}


const useCollection = (collectionName) => {

    if (!DB.collections[collectionName]) {
        DB.collections[collectionName] = {};
    }

    DB.get = function (itemId) {
        console.log(this.collections[collectionName][itemId] ? {
            id: itemId,
            ...this.collections[collectionName][itemId],
        } : 'Invalid id');
    };

    DB.create = function (itemData) {
        this.collections[collectionName][collectionName + '_' + findNextItemNumber(this.collections[collectionName])] = {
            ...itemData,
        }
    };

    DB.deleteOne = function (itemId) {
        delete this.collections[collectionName][itemId];
    };

    DB.edit = function (itemId, newData) {
        if (!this.collections[collectionName][itemId]) {
            console.log('Invalid id');
            return;
        }

        this.collections[collectionName][itemId] = {
            ...this.collections[collectionName][itemId],
            ...newData,
        }
    }

    return DB;
}


//result task 1:
const getPostItem = useCollection1('posts');
getPostItem('posts_1');


//results task 2:
const collection = useCollection('posts');

collection.get('posts_2');
collection.create({ name: 'name', text: 'text' });
collection.create({ name: 'name', text: 'text' });
collection.create({ name: 'name', text: 'text' });
collection.create({ name: 'name', text: 'text' });
collection.create({ name: 'name', text: 'text' });
collection.create({ name: 'name', text: 'text' });
collection.create({ name: 'name', text: 'text' });
collection.create({ name: 'name', text: 'text' });
collection.create({ name: 'name', text: 'text' });
collection.create({ name: 'name', text: 'text' });
collection.deleteOne('posts_6');
collection.get('posts_6');
collection.edit('posts_5', { text: 'New text!!!', name: 'NewPost' });
collection.get('posts_5');

//finish result after all operations:
console.log(DB);