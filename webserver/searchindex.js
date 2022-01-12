Search.setIndex({docnames:["app","app.constants","app.helpers","app.helpers.ami","app.helpers.aws","app.helpers.tests","app.utils","app.utils.aws","app.utils.cloud_interface","app.utils.general","app.utils.metrics","auth0","authentication","index","modules","payments","responsibilities","services","stripe"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["app.rst","app.constants.rst","app.helpers.rst","app.helpers.ami.rst","app.helpers.aws.rst","app.helpers.tests.rst","app.utils.rst","app.utils.aws.rst","app.utils.cloud_interface.rst","app.utils.general.rst","app.utils.metrics.rst","auth0.rst","authentication.rst","index.rst","modules.rst","payments.rst","responsibilities.rst","services.rst","stripe.rst"],objects:{"":[[0,0,0,"-","app"]],"app.config":[[0,1,1,"","DeploymentConfig"],[0,3,1,"","DeploymentTestConfig"],[0,1,1,"","LocalConfig"],[0,3,1,"","LocalTestConfig"],[0,4,1,"","getter"]],"app.config.DeploymentConfig":[[0,2,1,"","APP_GIT_BRANCH"],[0,2,1,"","APP_GIT_COMMIT"],[0,2,1,"","AUTH0_DOMAIN"],[0,2,1,"","AUTH0_WEBSERVER_CLIENT_ID"],[0,2,1,"","AUTH0_WEBSERVER_CLIENT_SECRET"],[0,2,1,"","AWS_INSTANCE_TYPE_TO_LAUNCH"],[0,2,1,"","DEFAULT_INSTANCE_BUFFER"],[0,2,1,"","DESIRED_FREE_MANDELBOXES"],[0,2,1,"","ENVIRONMENT"],[0,2,1,"","HOST_SERVER"],[0,2,1,"","HOST_SERVICE_PORT"],[0,3,1,"","JWT_ALGORITHM"],[0,3,1,"","JWT_DECODE_ALGORITHMS"],[0,3,1,"","JWT_DECODE_AUDIENCE"],[0,2,1,"","METRICS_SINK_LOCAL_FILE"],[0,2,1,"","METRICS_SINK_LOGZ_TOKEN"],[0,2,1,"","SENTRY_DSN"],[0,3,1,"","SILENCED_ENDPOINTS"],[0,2,1,"","SQLALCHEMY_DATABASE_URI"],[0,3,1,"","SQLALCHEMY_TRACK_MODIFICATIONS"],[0,3,1,"","STRIPE_CUSTOMER_ID_CLAIM"],[0,2,1,"","STRIPE_PRICE_ID"],[0,2,1,"","STRIPE_SECRET"],[0,3,1,"","STRIPE_SUBSCRIPTION_STATUS_CLAIM"],[0,2,1,"","config_table"]],"app.config.LocalConfig":[[0,2,1,"","APP_GIT_BRANCH"],[0,2,1,"","APP_GIT_COMMIT"],[0,2,1,"","AUTH0_DOMAIN"],[0,2,1,"","AUTH0_WEBSERVER_CLIENT_ID"],[0,2,1,"","AUTH0_WEBSERVER_CLIENT_SECRET"],[0,2,1,"","ENVIRONMENT"],[0,3,1,"","HOST_SERVER"],[0,3,1,"","SENTRY_DSN"],[0,2,1,"","STRIPE_SECRET"]],"app.constants":[[1,0,0,"-","config_table_names"],[1,0,0,"-","ec2_instance_states"],[1,0,0,"-","env_names"],[1,0,0,"-","mandelbox_assign_error_names"]],"app.constants.config_table_names":[[1,4,1,"","from_env"]],"app.constants.ec2_instance_states":[[1,1,1,"","EC2InstanceState"]],"app.constants.ec2_instance_states.EC2InstanceState":[[1,3,1,"","DOES_NOT_EXIST"],[1,3,1,"","PENDING"],[1,3,1,"","RUNNING"],[1,3,1,"","SHUTTING_DOWN"],[1,3,1,"","STOPPED"],[1,3,1,"","STOPPING"],[1,3,1,"","TERMINATED"]],"app.constants.mandelbox_assign_error_names":[[1,1,1,"","MandelboxAssignError"]],"app.constants.mandelbox_assign_error_names.MandelboxAssignError":[[1,3,1,"","COMMIT_HASH_MISMATCH"],[1,3,1,"","COULD_NOT_LOCK_INSTANCE"],[1,3,1,"","NO_INSTANCE_AVAILABLE"],[1,3,1,"","REGION_NOT_ENABLED"],[1,3,1,"","UNDEFINED"],[1,3,1,"","USER_ALREADY_ACTIVE"],[1,5,1,"","contains"]],"app.helpers":[[3,0,0,"-","ami"],[4,0,0,"-","aws"],[5,0,0,"-","tests"]],"app.helpers.ami":[[3,0,0,"-","ami_upgrade"]],"app.helpers.ami.ami_upgrade":[[3,4,1,"","create_ami_buffer"],[3,4,1,"","fetch_current_running_instances"],[3,4,1,"","insert_new_amis"],[3,4,1,"","launch_new_ami_buffer"],[3,4,1,"","swapover_amis"]],"app.helpers.aws":[[4,0,0,"-","aws_instance_post"],[4,0,0,"-","aws_instance_state"],[4,0,0,"-","aws_mandelbox_assign_post"]],"app.helpers.aws.aws_instance_post":[[4,4,1,"","check_and_handle_instances_with_old_commit_hash"],[4,4,1,"","check_and_handle_lingering_instances"],[4,4,1,"","check_instance_exists"],[4,4,1,"","do_scale_up_if_necessary"],[4,4,1,"","drain_instance"],[4,4,1,"","find_enabled_regions"],[4,4,1,"","find_instance"],[4,4,1,"","get_base_free_mandelboxes"],[4,4,1,"","get_current_commit_hash"],[4,4,1,"","get_instance_id"],[4,4,1,"","terminate_instance"],[4,4,1,"","try_scale_down_if_necessary"],[4,4,1,"","try_scale_down_if_necessary_all_regions"]],"app.helpers.aws.aws_mandelbox_assign_post":[[4,4,1,"","is_user_active"]],"app.helpers.tests":[[5,0,0,"-","conftest"],[5,0,0,"-","test_ec2_client"]],"app.helpers.tests.conftest":[[5,4,1,"","app"]],"app.helpers.tests.test_ec2_client":[[5,4,1,"","test_single"]],"app.utils":[[7,0,0,"-","aws"],[8,0,0,"-","cloud_interface"],[9,0,0,"-","general"],[10,0,0,"-","metrics"]],"app.utils.aws":[[7,0,0,"-","base_ec2_client"],[7,0,0,"-","ec2_userdata"]],"app.utils.aws.base_ec2_client":[[7,1,1,"","EC2Client"],[7,6,1,"","InstancesNotRunningException"]],"app.utils.aws.base_ec2_client.EC2Client":[[7,5,1,"","all_not_running"],[7,5,1,"","all_running"],[7,5,1,"","get_instance_states"],[7,5,1,"","get_ip_of_instances"],[7,5,1,"","spin_til_instances_not_running"],[7,5,1,"","spin_til_instances_running"],[7,5,1,"","start_instances"],[7,5,1,"","stop_instances"]],"app.utils.cloud_interface":[[8,0,0,"-","base_cloud_interface"]],"app.utils.cloud_interface.base_cloud_interface":[[8,1,1,"","CloudClient"]],"app.utils.cloud_interface.base_cloud_interface.CloudClient":[[8,5,1,"","get_ip_of_instances"],[8,5,1,"","spin_til_instances_running"],[8,5,1,"","start_instances"],[8,5,1,"","stop_instances"]],"app.utils.general":[[9,0,0,"-","limiter"],[9,0,0,"-","logs"],[9,0,0,"-","name_generation"],[9,0,0,"-","sanitize"],[9,0,0,"-","timing"]],"app.utils.general.name_generation":[[9,4,1,"","generate_name"]],"app.utils.general.sanitize":[[9,4,1,"","sanitize_email"]],"app.utils.general.timing":[[9,4,1,"","log_time"]],"app.utils.metrics":[[10,0,0,"-","flask_app"],[10,0,0,"-","flask_view"],[10,0,0,"-","keys"],[10,0,0,"-","keys_dims"],[10,4,1,"","monotonic_duration_ms"],[10,4,1,"","record_metrics"],[10,4,1,"","setup_metrics_logger"]],"app.utils.metrics.flask_app":[[10,4,1,"","app_record_metrics"]],"app.utils.metrics.flask_view":[[10,4,1,"","register_flask_view_metrics_monitor"]],app:[[0,0,0,"-","config"],[1,0,0,"-","constants"],[2,0,0,"-","helpers"],[0,4,1,"","log_request"],[0,4,1,"","parse_request"],[6,0,0,"-","utils"],[0,4,1,"","whist_pre_process"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","property","Python property"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","method","Python method"],"6":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:property","3":"py:attribute","4":"py:function","5":"py:method","6":"py:exception"},terms:{"0":[0,4,12],"1":[0,7,8,12,16],"10":[7,8],"12xlarg":[7,8],"2":[0,12,16],"3":16,"6479":12,"abstract":8,"boolean":0,"break":18,"case":[0,3,18],"class":[0,1,7,8],"default":[0,10],"do":[4,16],"enum":1,"float":10,"function":[0,3,4,7,9,14,16],"import":[7,18],"int":[0,3,4,7,8,10],"long":[7,8,18],"new":[3,4,16,17,18],"null":18,"public":[12,16],"return":[0,3,4,5,7,8,9,16,18],"switch":17,"true":[0,3,4,7,18],"while":16,A:[0,3,7,10,12,18],As:[0,18],At:16,By:[16,18],For:[0,12,16],If:[0,3,4,10,16,18],In:[12,13,16,17,18],Is:4,It:[0,13,16,17,18],Its:13,NO:10,NOT:[7,8,10],Not:18,On:17,That:3,The:[0,3,4,10,12,13,14,16,17,18],Then:3,There:18,These:14,To:18,Will:3,_f:0,_get_num_new_inst:4,_returntyp:9,_testconfig:0,abil:18,abl:[12,16],about:[0,10,16,18],abov:17,accept:[7,8],access:[0,7,12,13,18],access_kei:7,accordingli:17,account:[0,12,17,18],across:17,action:[13,18],activ:[3,4,8,13,16,17,18],actual:[0,3,4,16,17,18],ad:17,add:[4,17],addit:10,address:[7,8,18],admin:16,administr:[16,17],adopt:18,advanc:16,advantag:[16,18],affect:18,after:[3,4,18],against:17,agent:13,ago:3,alarm:12,algorithm:12,alia:0,alik:18,aliv:17,all:[0,3,4,7,8,10,13,14,16,17,18],all_not_run:7,all_run:7,alloc:[16,17],allow:[16,17,18],along:17,alongsid:10,alreadi:[3,4],also:[3,13,17,18],although:16,ami:[0,2,4,7,17],ami_id:3,ami_upgrad:[0,2],amis_fail:3,amis_to_exclud:3,amount:16,an:[0,1,3,4,5,7,9,10,12,16,17,18],ani:[0,3,4,7,10,16],api:[0,12,16,17,18],app:[13,14,18],app_git_branch:0,app_git_commit:0,app_record_metr:10,appear:18,applic:[0,3,10,13,17],appropri:18,ar:[0,3,4,7,8,12,14,16,17,18],argument:[0,3],around:10,assign_mandelbox:10,assist:10,associ:[0,3,4,12,16,17,18],assum:0,asymmetr:12,atom:[3,17],attach:[9,17],attempt:[0,12,18],attribut:[0,18],audienc:12,audit:10,auth0:[0,12,13,16,17,18],auth0_domain:[0,12],auth0_webserver_client_id:[0,12],auth0_webserver_client_secret:[0,12],auth:[0,12],authent:[0,13,16,17,18],author:[12,16,18],auto:10,autogener:14,automat:[0,10,18],avail:[10,12,16,18],aw:[0,2,3,6,8,13,16],aws_instance_post:[0,2],aws_instance_st:[0,2],aws_instance_type_to_launch:0,aws_mandelbox_assign_post:[0,2],back:[0,17],backend:18,base:[0,1,7,8,12,16,17,18],base_cloud_interfac:[0,6,7],base_ec2_cli:[0,6],bearer:12,becaus:[10,16],been:[0,12,16,17,18],befor:[3,16,18],begin:[16,17],behavior:18,being:[0,9,10],believ:18,below:[0,14],best:14,between:[3,7,8,10,16,18],bill:18,block:3,bodi:0,bool:[0,1,3,4,7,9],both:16,branch:[0,9],bring:18,brought:7,browser:[13,17],buffer:[3,17],bui:18,build:17,built:0,builtin:0,bundl:[0,17],busi:13,cach:[10,16,18],calcul:[0,10],call:[0,4,10,17,18],callabl:9,calle:10,can:[0,3,4,7,12,16,17,18],cancel:18,cannot:0,capac:[3,17],care:16,caus:18,celeri:17,central:[10,17],chang:4,check:[4,7,8,16,18],check_and_handle_instances_with_old_commit_hash:4,check_and_handle_lingering_inst:4,check_instance_exist:4,checkout:18,choos:16,chosen:12,claim:[0,13,18],classmethod:1,cleanup:3,clear:0,cli:[3,17],client:[0,3,4,16,17,18],client_commit_hash:[3,4],close:[16,17],cloud:[3,4,8,13,16,17],cloud_interfac:[0,6,7],cloudclient:[7,8],co:[0,12,18],code:[0,17],collect:10,com:[0,12],command:[3,17],comment:14,commit:[0,3,4,9],commit_hash_mismatch:1,commun:[0,12,13],compat:3,compliant:12,complic:16,comput:[13,18],config:[10,14,17],config_db_url:0,config_t:0,config_table_nam:[0,14],configur:[0,10,13,16,17],conftest:[0,2],connect:[0,4,7,8,16,17],consid:[12,18],constant:[0,4,7,14],consum:18,contain:[0,1,4,12,16,18],content:14,context:[3,10],continu:[16,18],control:[13,18],correct:12,correctli:[12,18],correspond:[7,10],could:[0,16,18],could_not_lock_inst:1,creat:[3,4,9,16,17,18],create_ami_buff:3,curl:[13,17],current:[0,3,4,16,18],current_app:10,custom:[0,10,13,16,17,18],dai:18,dashboard:18,data:[0,16,17],databas:[0,3,4,13,16],database_url:0,db:4,decid:18,decor:[0,18],decrypt:16,default_instance_buff:0,defin:[0,8,12,18],definit:0,delet:[16,17],delimit:10,demand:16,deni:[17,18],depend:[0,10],deploi:[0,17],deploy:[0,10,12,13,17],deploymentconfig:0,deploymenttestconfig:0,deprovis:17,deriv:0,desir:17,desired_free_mandelbox:0,desktop:[13,16,17,18],destroi:16,detect:0,determin:[0,4,12,16,17,18],dev:[0,17],develop:[0,10,13,17,18],dict:[3,7,8],differ:10,differenti:3,dimens:10,directli:17,directori:17,disabl:[3,7,8],disconnect:[16,17],disregard:18,do_scale_up_if_necessari:4,doc:[0,14],docstr:14,doe:[4,16],does_not_exist:1,doesn:3,domain:0,don:[12,18],done:12,down:[1,4,17,18],download:12,downsid:18,drain:[3,4],drain_inst:4,drive:16,due:[17,18],dure:0,dynam:16,e:[0,12,13,16,18],each:[0,3,7,12,16,17,18],eas:[4,18],easier:10,easili:[12,16,17],ec2:[0,4,7,17],ec2_instance_st:[0,7,14],ec2_userdata:[0,6],ec2client:7,ec2instancest:[1,7],edg:3,effect:[0,3],effici:18,either:[0,3,4,18],elaps:10,elimin:18,els:4,email:9,employe:16,empti:9,en:0,encrypt:16,end:[10,13],endpoint:[0,12,18],enforc:[16,18],enough:16,ensur:12,enter:18,entry_web:14,enumer:1,env:[0,1],env_nam:[0,14],environ:[0,17],ephemer:16,error:3,especi:18,essenti:3,etc:13,even:3,everi:[4,7,8,16],everyon:16,everyth:7,exact:18,examin:18,exampl:[0,10,12,16],exceed:18,except:[3,7,16],execut:0,exist:[3,4,7,16,18],exp:12,expect:[5,7],expir:18,explan:12,expos:10,extern:13,extra:18,extra_dim:10,extract:[10,18],extrem:18,fact:18,factori:0,fail:[0,3,18],fall:[0,18],fallback:0,fals:[0,4,7,9],far:16,fetch:[0,3],fetch_current_running_inst:3,few:3,file:[0,7,10],find:[4,12],find_enabled_region:4,find_inst:4,fine:3,first:[0,10,18],flask:[0,3,5,10,17],flask_app:[0,3,6],flask_view:[0,6],flow:3,follow:[0,3,12,16,17,18],force_buff:4,form:18,found:0,fractal:[0,12,18],from:[0,3,4,10,12,13,14,16,17,18],from_env:1,from_object:0,frontend:13,fulfil:13,fulli:[7,8],func:9,furthermor:18,g4dn:[7,8],g:[12,13,18],gener:[0,4,6,14],generate_nam:9,get:[0,3,4,7,8,12],get_base_free_mandelbox:4,get_current_commit_hash:4,get_instance_id:4,get_instance_st:7,get_ip_of_inst:[7,8],getter:0,gha:13,git:0,github:13,given:[4,7,8],go:[3,7],googl:14,govern:7,grant:[16,17,18],guarante:0,guidelin:12,ha:[0,3,4,16,17,18],handl:[10,17],happen:3,hard:16,hardwarewis:[7,8],hash:[3,4],have:[3,4,7,8,9,10,12,16,17,18],haven:3,header:12,heartbeat:17,heavili:17,helper:[0,7,9,14],henc:0,heroku:[0,17],high:[16,18],higher:[10,17],hirefir:13,hold:[4,18],hook:10,hope:18,host:[0,3,4,13,18],host_serv:0,host_service_port:0,how:[4,7,8,17],howev:18,http:[0,12,18],i:[0,16,18],iat:12,id:[0,4,7,8,12,16,18],ideal:16,identifi:0,idl:16,ie:0,imag:8,image_id:[7,8],implement:[0,8,13,18],impli:0,inact:[3,4,18],includ:[0,13,18],incom:[0,13],incomplet:18,incomplete_expir:18,increas:3,index:13,index_in_thread_list:3,indic:[0,3,12,18],indirect:7,influenc:17,info:0,inform:[0,16,18],infrastructur:[13,17],initi:[7,8,16,17],insert:3,insert_new_ami:3,insid:10,instal:17,instanc:[0,3,4,5,7,8,9,10,13,16,17],instance_id:[4,7,8],instance_nam:[7,8],instance_typ:[4,7,8],instanceinfo:[3,4],instancesnotrunningexcept:7,instant:3,instanti:[0,10],instead:[0,18],instruct:16,integ:10,integr:[12,13],intend:10,interact:[3,17],interfac:[8,13,17],invalid:9,invari:[17,18],invok:[3,17],ip:[4,7,8],is_user_act:4,issu:[12,16,18],issuer:12,its:[3,12,13,16,18],itself:[0,4,16],json:[0,10,12],just:[3,16],jwk:12,jwt:16,jwt_algorithm:0,jwt_decode_algorithm:0,jwt_decode_audi:0,keep:[16,17,18],kei:[0,3,6,7,12,16],key_id:7,keyerror:0,keys_dim:[0,6],keyword:0,know:[17,18],known:[12,16],kwarg:[0,4],la:0,lack:18,launch:[3,4],launch_new_ami_buff:3,layer:7,least:18,length:3,less:3,let:[17,18],level:[0,14,16],librari:17,lightweight:13,like:[17,18],limit:[0,6,18],linger:4,link:14,list:[0,3,4,7,8],listen:17,ll:10,load:[16,17,18],local:[0,12],local_fil:10,localconfig:0,localtestconfig:0,locat:4,log:[0,6,10,17,18],log_request:0,log_tim:9,logger:10,logic:13,logz:10,logz_token:10,logziohandl:10,longer:17,look:18,lower:17,machin:[0,17],made:18,mai:[0,16,17,18],main:[0,16],mainli:17,make:[3,16],malfunct:17,manag:[13,16,17,18],mandelbox:[4,13,16,17],mandelbox_assign_error_nam:[0,4,14],mandelboxassignerror:[1,4],mani:[0,4,7,8,13],manual:[17,18],map:[3,7,8,10],mark:[3,4,7,8],match:0,mention:18,method:[0,10],meticul:18,metric:[0,6,16,17],metrics_logg:10,metrics_sink_local_fil:0,metrics_sink_logz_token:0,millisecond:10,minim:16,minut:3,miss:3,model:[3,4],modul:13,monitor:13,monoton:10,monotonic_duration_m:10,more:[3,17,18],most:[12,16,18],move:18,much:18,must:[0,10,12,16,18],name:[0,3,4,7,8,9],name_gener:[0,6],namespac:12,necess:18,necessari:[16,18],necessarili:[7,8,18],need:[3,4,7,17,18],neeed:3,neighbor:4,neither:[0,16],nevertheless:18,new_ami:3,new_amis_str:3,newer:17,newlin:10,no_instance_avail:1,node:17,non:18,none:[3,4,5,7,8,9,10],nonetyp:4,nor:[0,16],normal:0,notabl:17,note:[0,4,10,12],notifi:[16,17],num_inst:[7,8],number:[3,4,16,17],oauth:[0,12],object:[0,3,8,10,18],observ:18,obtain:[16,18],off:[0,7,8,17],old:[3,4],older:[3,17],onc:[3,7,12,16,17,18],one:[0,3,12,16,18],ones:3,onli:[3,4,10,16,17,18],op:0,open:18,oper:3,optim:[12,13],option:[0,7,9,10],orchestr:17,order:[12,13,16,18],os:[0,18],other:[0,3,13,16,18],otherwis:[7,18],our:[3,4,7,8,12,13,14,16,17,18],ourselv:16,out:18,outgo:13,over:[3,7,17],overrid:[0,4],overridden:17,own:[4,16,18],packag:[13,14],page:13,pai:18,pair:4,palletsproject:0,parallel:3,param:[3,4,7,8,9],paramet:[0,3,4,7],pars:0,parse_request:0,part:[17,18],particular:[0,17],pass:[0,3,7,8],past_du:18,payload:[12,16,18],payment:[13,17],payment_portal_url:18,payment_requir:18,pend:1,per:[3,12],perform:[16,17],period:17,persist:16,ping:0,platform:0,point:[16,17],poll:[7,8],pool:16,popul:10,port:0,portal:13,possibl:[0,17,18],post:0,postgres_password:0,postgresql:0,postgressql:17,postman:[13,17],potenti:[3,10],practic:16,pre_connect:3,preconfigur:17,prefix:9,present:3,price:0,process:[0,3,10,17,18],procur:16,prod:17,product:[0,12],properli:17,properti:[0,7,8],protect:[12,18],protocol:[13,16],provid:[0,3,7,8,10,13],provis:[7,16,17],proxim:4,purchas:18,purg:3,purpos:17,python:17,quarter:18,queri:[4,13,16,18],question:4,quicker:16,quickli:16,rais:0,random:9,rate:18,rather:17,re:[7,8,16,18],react:4,read:[0,12,16,17],readi:[7,8],real:10,realli:16,receipt:12,receiv:[9,13,16,18],recent:18,recieved_from:0,recommend:4,record:[0,10,12,18],record_metr:10,reduc:[3,16],redund:16,refer:3,region:[3,4,7,17],region_nam:[3,7],region_not_en:1,region_to_ami_id_map:3,regiontoami:3,regist:[0,10,17],register_flask_view_metrics_monitor:10,releas:17,remov:[3,4],renew:18,report:10,repres:[0,10,18],represent:3,request:[0,10,12,13,16,17,18],requir:12,resourc:[9,12,16,17,18],respect:18,respons:[13,17],rest:[7,18],result:10,retriev:0,review:0,rfc:12,risk:18,round:[10,18],row:3,rs256:[0,12],rule:18,run:[0,1,3,4,7,8,13,16,17],runtim:17,s3:16,s:[0,4,9,10,12,13,16,18],safe:18,same:18,sanit:[0,6],sanitize_email:9,scale:[4,13,17],scenario:18,scheme:0,scope:16,search:13,second:[7,8,18],secret:0,section:[12,18],see:[0,10,12,16,17],select:0,self:0,send:[13,17,18],sent:[10,12],sentry_dsn:0,serv:16,server:[0,12,13,16],servic:[0,3,4,13,18],session:[0,13,16,17,18],set:[0,3,10,12,17],setup:10,setup_metrics_logg:10,sever:3,sh:7,sha:0,share:[17,18],ship:10,should:[0,3,4,7,8,9,10,18],shut:[1,17],shutting_down:1,side:[17,18],sign:[12,16,18],signatur:[12,16],signific:16,silenced_endpoint:0,similar:7,sinc:[0,3,4,12],singleton:10,skip:[4,16],so:[3,7,16,17,18],some:16,sort:4,sourc:0,space:4,specif:[4,12,16,17,18],specifi:[0,4,7,8],spin:[3,4],spin_til_instances_not_run:7,spin_til_instances_run:[7,8],spun:3,sqlalchemy_database_uri:0,sqlalchemy_track_modif:0,stage:[0,10,17],standard:[0,10,12],start:[0,3,5,7,8,10,17],start_inst:[7,8],starter:9,starter_nam:9,startup:17,state:[7,16,18],statu:[0,12,13,16,17],step:[3,16,17],stop:[1,4,16],stop_inst:[7,8],store:[10,16,18],str:[0,1,3,4,7,8,9,10],stream:[13,17],string:[0,3,9,12,18],stripe:[0,12,13,16],stripe_api_kei:18,stripe_customer_id:[0,12,18],stripe_customer_id_claim:[0,18],stripe_price_id:[0,18],stripe_secret:[0,18],stripe_subscription_status_claim:[0,18],style:14,submodul:[2,6,14],subpackag:14,subscrib:16,subscript:[0,12,13,16,17],subscription_object:0,subscription_statu:[0,12,18],subsequ:[10,18],succe:[4,18],suffici:3,suitabl:0,suppli:[10,16],support:[0,3,10],sure:16,swap:3,swapov:3,swapover_ami:3,sync:18,syntax:0,system:16,t:[3,12,18],tabl:[0,3],take:[3,16,18],taken:16,task_definit:0,task_nam:10,technic:18,tell:17,tenant:[0,12,16,18],terimin:18,term:16,termin:[1,4,18],terminate_inst:4,test:[0,2,4,9,13,17],test_ec2_cli:[0,2],test_prefix:9,test_singl:5,testconfig:0,than:[3,10,16,17,18],thei:[0,3,8,16],them:[3,4],themselv:3,theori:18,thi:[0,3,4,7,8,9,10,16,17,18],those:[0,4,16,18],thread:3,three:16,through:3,thrown:7,time:[0,3,6,10,12,16,17,18],time_to_create_row:10,time_to_find_inst:10,time_wait:[7,8],token:[0,10,13,16,18],took:10,tool:[13,17],top:14,total_request_tim:10,track:[3,16,17],tri:0,trial:[16,18],trigger:17,trip:18,trust:16,try_scale_down_if_necessari:4,try_scale_down_if_necessary_all_region:4,tty:17,tupl:3,turn:[7,8],two:[10,12],type:[0,4,7,8,9],ui:18,uid:9,uinput:17,un:18,unaccept:18,unavail:3,undefin:1,under:18,union:[4,10],uniqu:0,unknown:0,unless:0,unpaid:18,unrecogn:0,unsafe_email:9,unsanit:9,until:[3,7,8],up:[3,4,7,10,17,18],updat:[3,17,18],upgrad:3,upload:16,upon:[12,16],url:[0,12,18],us:[0,3,4,7,8,10,12,13,14,16,17,18],user:[0,3,4,12,13,16,18],user_already_act:1,userdata:7,userload:16,usernam:4,usual:18,util:[0,14,17],valid:[4,9,13,16],valu:[0,1,7,10,18],vanish:16,variabl:[0,12,17,18],variant:10,varieti:18,variou:13,verif:12,verifi:[12,16],version:[10,17],via:[7,17],view_func:0,violat:17,vm:0,wa:16,wait:[3,7,8,16],want:[3,4,16],warm:3,we:[3,4,12,16,17,18],web:[10,12,16,17],webserv:[0,12,17,18],webserver_url:0,well:[0,12,18],were:[0,3,16],what:[3,7,8],when:[0,4,7,14,16,17,18],whenev:17,where:10,whether:[0,4,9,12,16,18],which:[0,3,4,7,8,9,10,16,17,18],whist:[0,12,16,18],whist_pre_process:0,who:[16,18],whole:3,whose:[0,4,18],why:12,window:3,without:16,word:16,work:[5,14],worker:17,workflow:13,worst:18,worth:18,would:[0,3,18],wrapper:10,written:10,x:[0,4],yet:[4,7,8],you:7},titles:["app package","app.constants package","app.helpers package","app.helpers.ami package","app.helpers.aws package","app.helpers.tests package","app.utils package","app.utils.aws package","app.utils.cloud_interface package","app.utils.general package","app.utils.metrics package","auth0","Authentication","Welcome to the Whist Webserver internal documentation!","Module Documentation","Payments","Webserver Responsibilities","Other Services","Stripe Integration"],titleterms:{access:16,action:17,agent:17,ami:3,ami_upgrad:3,app:[0,1,2,3,4,5,6,7,8,9,10],applic:16,auth0:11,authent:12,aw:[4,7,17],aws_instance_post:4,aws_instance_st:4,aws_mandelbox_assign_post:4,base_cloud_interfac:8,base_ec2_cli:7,claim:12,cloud_interfac:8,comput:16,config:0,config_table_nam:1,configur:[12,18],conftest:5,constant:1,content:[0,1,2,3,4,5,6,7,8,9,10,13],control:16,custom:12,databas:17,document:[13,14],ec2_instance_st:1,ec2_userdata:7,end:16,entry_web:0,env_nam:1,flask_app:10,flask_view:10,gener:9,github:17,helper:[2,3,4,5],hirefir:17,host:17,indic:13,integr:18,intern:13,introduct:13,kei:10,keys_dim:10,limit:9,log:9,mandelbox_assign_error_nam:1,metric:10,modul:[0,1,2,3,4,5,6,7,8,9,10,14],name_gener:9,optim:18,other:17,packag:[0,1,2,3,4,5,6,7,8,9,10],payment:[15,18],portal:18,protocol:17,respons:16,sanit:9,scale:16,server:17,servic:17,start:16,statu:18,stream:16,stripe:[17,18],submodul:[0,1,3,4,5,7,8,9,10],subpackag:[0,2,6],subscript:18,tabl:13,test:5,test_ec2_cli:5,time:9,token:12,user:17,util:[6,7,8,9,10],valid:12,webserv:[13,16],welcom:13,whist:[13,17],workflow:17}})