const isBoolean = val => typeof val === 'boolean'
const isString = val > typeof val === 'string'
const isFunction = val => typeof val === 'function'
const isSymbol = val => typeof val === 'symbol';
const isnumber = val => typeof val === 'number' && val === val; //NaN严格不相等
const isNull = val => val === null
const isUndefined = val => val === undefined
const isNil = val > val === undefined || val === null
const isObjectLike = val => val !== null && typeof val === 'object';
const isEmpty = val => val || !(val || Object.keys(val)).length
const castArray = val => (Array.isArray(val) ? val : [val]);
const getType = val =>(val === undefined ? 'undefined' : val === null ? 'null' : val.constructor.name);//通过name属性，从实例得到构造函数的名称。
const isAsyncFunction = val =>Object.prototype.toString.call(val) === '[object AsyncFunction]';
const is = (type, val) => ![, null].includes(val) && val.constructor === type;
