const mongoose = require("mongoose");
const Dashboard = mongoose.model("Dashboard");
class Dashboards{
    index(request, respond){
        Dashboard.find({}, (err, dashboards) =>{
            if (err){
                console.log(err);
            }
            respond.render("index", {dashboards:dashboards});
        });
    }
    create(request, respond){
        let newAni = new Dashboard(request.body);
        newAni.save(err =>{
            if(err){
                console.log(err);
            }
            respond.redirect("/");
        });
    }
    single(request, respond){
        Dashboard.findOne({_id: request.params._id}, (err, dashboard) =>{
            if (err){
                console.log(err);
            }
            respond.render("single", {dashboard});
        });
    }
    new(request, respond){
        respond.render("new");
    }
    edit(request, respond){
        Dashboard.findOne({_id: request.params._id}, (err, dashboard) => {
            if(err){
                console.log(err);
            }
            respond.render("edit", {dashboard});
        });
    }
    update(request, respond){
        Dashboard.findOneAndUpdate({_id: request.params._id}, request.body, {runValidators: true}, err=>{
            if(err){
                console.log(err);
            }
            respond.redirect("/");
        });
    }
    destroy(request, respond){
        Dashboard.findOneAndDelete({_id: request.params._id}, request.body, err =>{
            if(err){
                console.log(err);
            }
            respond.redirect("/");
        });
    }
}


module.exports = new Dashboards();