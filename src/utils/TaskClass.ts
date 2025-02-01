export default class TaskClass {
    private name: string
    private isChecked: boolean
    constructor(name: string, isChecked: boolean) {
        this.name = name
        this.isChecked = isChecked
    }
    get taskName() {
        return this.name
    }
    set taskName(newName) {
        this.name = newName
    }
    get taskIsChecked() {
        return this.isChecked
    }
    set taskIsChecked(isChecked) {
        this.isChecked = isChecked
    }
}
