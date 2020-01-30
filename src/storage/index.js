const STORAGE_KEY='mi'
export default {
    getStorage(){
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY))||{}
    },
    getItem(key,module_name){
        if (module_name){
          let val = this.getItem(module_name);
          if(val) return val[key];
        }
        return this.getStorage()[key];
      },
    setItem(key,value,module_name){
        if(module_name){
            let val=this.getItem(module_name)
            val[key]=value
            return this.setItem(module_name,val)
        }else{
            let val=this.getStorage()
            val[key]=value
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
        }
    },
    clear(key,module_name){
        let val=this.getStorage()
        if(module_name){
            if(!val[module_name]) return
            delete val[module_name][key]
        }else{
            delete val[key]
        }
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
    }
}