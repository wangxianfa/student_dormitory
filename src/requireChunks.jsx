export const home = (location,callback)=>{
    require.ensure([],(require)=>{
        callback(null,require('./components/Home/Home').default)
    },"home");
};

export const studentDormitory = (location,callback)=>{
    require.ensure([],(require)=>{
        callback(null,require('./components/Student_dormitory/Student_dormitory').default)
    },"studentDormitory");
};

export const sdHome = (location,callback)=>{
    require.ensure([],(require)=>{
        callback(null,require('./components/SDHome/SDHome').default)
    },"sdHome");
};

export const dormEmployee = (location,callback)=>{
    require.ensure([],(require)=>{
        callback(null,require('./components/DormEmployee/DormEmployee').default)
    },"dormEmployee");
};

export const buildingMsg = (location,callback)=>{
    require.ensure([],(require)=>{
        callback(null,require('./components/BuildingMsg/BuildingMsg').default)
    },"buildingMsg");
};