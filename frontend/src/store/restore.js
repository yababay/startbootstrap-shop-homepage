export default function restore (name){
    try {
        const saved = localStorage.getItem(name);
        if(!saved) return [];
        return JSON.parse(saved);
    }
    catch(err){
        console.log(err);
        localStorage.removeItem(name);
        return []
    }
}
