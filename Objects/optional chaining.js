// obj?.prop  -> returns obj.prop if obj exists
// obj?.[props] -> return obj[props] if obj exists
//  obj.method?.()  -> calls obj.method() if obj.method exists

// . The ?. checks the left part for null/undefined and allows the evaluation to proceed if it’s not so.

// A chain of ?. allows to safely access nested properties.

//   ?. is optional chaining
