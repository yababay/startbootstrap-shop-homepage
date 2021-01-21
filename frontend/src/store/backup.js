export default function backup (name, state) {
    localStorage.setItem(name, JSON.stringify(state))
}
