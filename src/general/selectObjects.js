export const selectObjects = (data) => {
    const {objects, dataFrom, dataBefore, selected} = data
    const fetchingByName = selected.map(el => objects[el-1])
    let fetchingByPeriod = []
    fetchingByName.forEach(object => {
        const inspectedObject = {
            name: object.name,
            events: object.events.filter(event => {
                const data = new Date(event.contract)
                return new Date(dataFrom) <= data && data <= new Date(dataBefore)
            })
        }
        inspectedObject.events.length && fetchingByPeriod.push(inspectedObject)
    })

    return fetchingByPeriod
}