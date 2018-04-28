<template>
    <div class="row">
        <div class="row col-md-4 col-md-offset-8">
            <button class="btn btn-success" @click="save">Save </button>
            <button class="btn btn-primary" @click="cancel">Cancel </button>
        </div>
        <div class="row" style="margin-top:150px">
            <div class="row col-md-6 col-md-offset-3 form-group">
                <input type="text" class="form-control" v-model="listname" id="targetname" placeholder="Name"/>
            </div>
            <div class="row col-md-6 col-md-offset-3 form-group" style="margin-top:50px">
                <label for="sel1">Date:</label>
                <input type="date" v-model="date" class="form-control" name="bday">
            </div>
            <div class="row col-md-6 col-md-offset-3 form-group" style="margin-top:50px">
                <label for="sel1">Select Fridge:</label>
                <select v-model="fridge" class="form-control" id="sel1">
                    <option>Fridge1</option>
                    <option>Fridge2</option>
                </select>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'savedata',
    methods: {
        cancel(){
            this.$router.push('/');
        },
        save(){
            var qtdetails = {'date':this.date, 'fridge':this.fridge, 'name': this.listname};//Questions
			var rootRef = firebase.database().ref();
			var storesRef = rootRef.child(this.fridge+'/'+this.listname);
			var newStoreRef = storesRef.push();//Add record to Question table in fireabse
			newStoreRef.set(qtdetails).then(function(){
			})
            console.log(firebase)
        }
    }
}
</script>