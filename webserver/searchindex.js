Search.setIndex({docnames:["app","app.constants","app.helpers","app.helpers.aws","app.helpers.tests","app.utils","app.utils.aws","app.utils.cloud_interface","app.utils.general","app.utils.metrics","auth0","authentication","index","modules","payments","responsibilities","services","stripe"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["app.rst","app.constants.rst","app.helpers.rst","app.helpers.aws.rst","app.helpers.tests.rst","app.utils.rst","app.utils.aws.rst","app.utils.cloud_interface.rst","app.utils.general.rst","app.utils.metrics.rst","auth0.rst","authentication.rst","index.rst","modules.rst","payments.rst","responsibilities.rst","services.rst","stripe.rst"],objects:{"":[[0,0,0,"-","app"]],"app.config":[[0,1,1,"","DeploymentConfig"],[0,3,1,"","DeploymentTestConfig"],[0,1,1,"","LocalConfig"],[0,3,1,"","LocalTestConfig"],[0,4,1,"","getter"]],"app.config.DeploymentConfig":[[0,2,1,"","APP_GIT_BRANCH"],[0,2,1,"","APP_GIT_COMMIT"],[0,2,1,"","AUTH0_DOMAIN"],[0,2,1,"","AUTH0_WEBSERVER_CLIENT_ID"],[0,2,1,"","AUTH0_WEBSERVER_CLIENT_SECRET"],[0,2,1,"","AWS_INSTANCE_TYPE_TO_LAUNCH"],[0,2,1,"","DEFAULT_INSTANCE_BUFFER"],[0,2,1,"","DESIRED_FREE_MANDELBOXES"],[0,2,1,"","ENVIRONMENT"],[0,2,1,"","HOST_SERVER"],[0,2,1,"","HOST_SERVICE_PORT"],[0,3,1,"","JWT_ALGORITHM"],[0,3,1,"","JWT_DECODE_ALGORITHMS"],[0,3,1,"","JWT_DECODE_AUDIENCE"],[0,2,1,"","METRICS_SINK_LOCAL_FILE"],[0,2,1,"","METRICS_SINK_LOGZ_TOKEN"],[0,2,1,"","SENTRY_DSN"],[0,3,1,"","SILENCED_ENDPOINTS"],[0,2,1,"","SQLALCHEMY_DATABASE_URI"],[0,3,1,"","SQLALCHEMY_TRACK_MODIFICATIONS"],[0,3,1,"","STRIPE_CUSTOMER_ID_CLAIM"],[0,2,1,"","STRIPE_PRICE_ID"],[0,2,1,"","STRIPE_SECRET"],[0,3,1,"","STRIPE_SUBSCRIPTION_STATUS_CLAIM"],[0,2,1,"","config_table"]],"app.config.LocalConfig":[[0,2,1,"","APP_GIT_BRANCH"],[0,2,1,"","APP_GIT_COMMIT"],[0,2,1,"","AUTH0_DOMAIN"],[0,2,1,"","AUTH0_WEBSERVER_CLIENT_ID"],[0,2,1,"","AUTH0_WEBSERVER_CLIENT_SECRET"],[0,2,1,"","ENVIRONMENT"],[0,3,1,"","HOST_SERVER"],[0,3,1,"","SENTRY_DSN"],[0,2,1,"","STRIPE_SECRET"]],"app.constants":[[1,0,0,"-","config_table_names"],[1,0,0,"-","ec2_instance_states"],[1,0,0,"-","env_names"],[1,0,0,"-","mandelbox_assign_error_names"]],"app.constants.config_table_names":[[1,4,1,"","from_env"]],"app.constants.ec2_instance_states":[[1,1,1,"","EC2InstanceState"]],"app.constants.ec2_instance_states.EC2InstanceState":[[1,3,1,"","DOES_NOT_EXIST"],[1,3,1,"","PENDING"],[1,3,1,"","RUNNING"],[1,3,1,"","SHUTTING_DOWN"],[1,3,1,"","STOPPED"],[1,3,1,"","STOPPING"],[1,3,1,"","TERMINATED"]],"app.constants.mandelbox_assign_error_names":[[1,1,1,"","MandelboxAssignError"]],"app.constants.mandelbox_assign_error_names.MandelboxAssignError":[[1,3,1,"","COMMIT_HASH_MISMATCH"],[1,3,1,"","COULD_NOT_LOCK_INSTANCE"],[1,3,1,"","NO_INSTANCE_AVAILABLE"],[1,3,1,"","REGION_NOT_ENABLED"],[1,3,1,"","UNDEFINED"],[1,3,1,"","USER_ALREADY_ACTIVE"],[1,5,1,"","contains"]],"app.helpers":[[3,0,0,"-","aws"],[4,0,0,"-","tests"]],"app.helpers.aws":[[3,0,0,"-","aws_instance_post"],[3,0,0,"-","aws_instance_state"],[3,0,0,"-","aws_mandelbox_assign_post"]],"app.helpers.aws.aws_instance_post":[[3,4,1,"","do_scale_up_if_necessary"],[3,4,1,"","find_enabled_regions"],[3,4,1,"","find_instance"],[3,4,1,"","get_base_free_mandelboxes"]],"app.helpers.aws.aws_mandelbox_assign_post":[[3,4,1,"","is_user_active"]],"app.helpers.tests":[[4,0,0,"-","conftest"],[4,0,0,"-","test_ec2_client"]],"app.helpers.tests.conftest":[[4,4,1,"","app"]],"app.helpers.tests.test_ec2_client":[[4,4,1,"","test_single"]],"app.models":[[0,1,1,"","CloudProvider"],[0,1,1,"","Image"],[0,1,1,"","Instance"],[0,1,1,"","Mandelbox"],[0,1,1,"","MandelboxHostState"],[0,1,1,"","MandelboxState"],[0,1,1,"","NoValue"],[0,1,1,"","WhistApplication"]],"app.models.CloudProvider":[[0,3,1,"","AWS"]],"app.models.Image":[[0,3,1,"","client_sha"],[0,3,1,"","image_id"],[0,3,1,"id0","provider"],[0,3,1,"","region"],[0,3,1,"","updated_at"]],"app.models.Instance":[[0,3,1,"","client_sha"],[0,3,1,"","created_at"],[0,3,1,"","id"],[0,3,1,"","image_id"],[0,3,1,"","instance_type"],[0,3,1,"","ip_addr"],[0,3,1,"id1","mandelboxes"],[0,3,1,"id2","provider"],[0,3,1,"","region"],[0,3,1,"","remaining_capacity"],[0,3,1,"id3","status"],[0,3,1,"","updated_at"]],"app.models.Mandelbox":[[0,3,1,"id4","app"],[0,3,1,"","created_at"],[0,3,1,"","host"],[0,3,1,"","id"],[0,3,1,"","instance_id"],[0,3,1,"","session_id"],[0,3,1,"id5","status"],[0,3,1,"","user_id"]],"app.models.MandelboxHostState":[[0,3,1,"","ACTIVE"],[0,3,1,"","DRAINING"],[0,3,1,"","PRE_CONNECTION"]],"app.models.MandelboxState":[[0,3,1,"","ALLOCATED"],[0,3,1,"","CONNECTING"],[0,3,1,"","DYING"],[0,3,1,"","RUNNING"]],"app.models.WhistApplication":[[0,3,1,"","CHROME"]],"app.utils":[[6,0,0,"-","aws"],[7,0,0,"-","cloud_interface"],[8,0,0,"-","general"],[9,0,0,"-","metrics"]],"app.utils.aws":[[6,0,0,"-","base_ec2_client"],[6,0,0,"-","ec2_userdata"]],"app.utils.aws.base_ec2_client":[[6,1,1,"","EC2Client"],[6,6,1,"","InstancesNotRunningException"]],"app.utils.aws.base_ec2_client.EC2Client":[[6,5,1,"","all_not_running"],[6,5,1,"","all_running"],[6,5,1,"","get_instance_states"],[6,5,1,"","get_ip_of_instances"],[6,5,1,"","spin_til_instances_not_running"],[6,5,1,"","spin_til_instances_running"],[6,5,1,"","start_instances"],[6,5,1,"","stop_instances"]],"app.utils.cloud_interface":[[7,0,0,"-","base_cloud_interface"]],"app.utils.cloud_interface.base_cloud_interface":[[7,1,1,"","CloudClient"]],"app.utils.cloud_interface.base_cloud_interface.CloudClient":[[7,5,1,"","get_ip_of_instances"],[7,5,1,"","spin_til_instances_running"],[7,5,1,"","start_instances"],[7,5,1,"","stop_instances"]],"app.utils.general":[[8,0,0,"-","limiter"],[8,0,0,"-","logs"],[8,0,0,"-","name_generation"],[8,0,0,"-","sanitize"],[8,0,0,"-","timing"]],"app.utils.general.name_generation":[[8,4,1,"","generate_name"]],"app.utils.general.sanitize":[[8,4,1,"","sanitize_email"]],"app.utils.general.timing":[[8,4,1,"","log_time"]],"app.utils.metrics":[[9,0,0,"-","flask_app"],[9,0,0,"-","flask_view"],[9,0,0,"-","keys"],[9,0,0,"-","keys_dims"],[9,4,1,"","monotonic_duration_ms"],[9,4,1,"","record_metrics"],[9,4,1,"","setup_metrics_logger"]],"app.utils.metrics.flask_app":[[9,4,1,"","app_record_metrics"]],"app.utils.metrics.flask_view":[[9,4,1,"","register_flask_view_metrics_monitor"]],app:[[0,0,0,"-","config"],[1,0,0,"-","constants"],[2,0,0,"-","helpers"],[0,4,1,"","log_request"],[0,0,0,"-","models"],[0,4,1,"","parse_request"],[5,0,0,"-","utils"],[0,4,1,"","whist_pre_process"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","property","Python property"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","method","Python method"],"6":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:property","3":"py:attribute","4":"py:function","5":"py:method","6":"py:exception"},terms:{"0":[0,3,11],"0x7f49ef4ce040":0,"0x7f49ef4ce5c0":0,"1":[0,6,7,11,15],"10":[6,7],"12xlarg":[6,7],"2":[0,11,15],"3":[0,15],"4":0,"6479":11,"abstract":7,"boolean":0,"break":17,"case":[0,17],"class":[0,1,6,7],"default":[0,9],"do":15,"enum":[0,1],"float":9,"function":[0,3,6,8,13,15],"import":[6,17],"int":[0,3,6,7,9],"long":[6,7,17],"new":[3,15,16,17],"null":17,"public":[0,11,15],"return":[0,3,4,6,7,8,15,17],"switch":16,"true":[0,3,6,17],"while":15,A:[0,6,9,11,17],As:[0,17],At:15,By:[15,17],For:[0,11,15],If:[0,3,9,15,17],In:[11,12,15,16,17],Is:3,It:[0,12,15,16,17],Its:12,NO:9,NOT:[6,7,9],Not:17,On:16,The:[0,9,11,12,13,15,16,17],There:17,These:13,To:17,_f:0,_get_num_new_inst:3,_returntyp:8,_testconfig:0,abil:17,abl:[11,15],about:[0,9,15,17],abov:16,accept:[6,7],access:[0,6,11,12,17],access_kei:6,accomod:0,accordingli:16,account:[0,11,16,17],across:16,action:[12,17],activ:[0,3,7,12,15,16,17],actual:[0,15,16,17],ad:16,add:[3,16],addit:[0,9],address:[0,6,7,17],admin:15,administr:[15,16],adopt:17,advanc:15,advantag:[15,17],affect:17,after:17,against:16,agent:12,alarm:11,algorithm:11,alia:0,alik:17,aliv:16,all:[0,6,7,9,12,13,15,16,17],all_not_run:6,all_run:6,alloc:[0,15,16],allow:[15,16,17],along:16,alongsid:9,alreadi:3,also:[12,16,17],although:15,ami:[3,6,16],amount:15,an:[0,1,3,4,6,8,9,11,15,16,17],ani:[0,3,6,9,15],api:[0,11,15,16,17],app:[12,13,17],app_git_branch:0,app_git_commit:0,app_record_metr:9,appear:17,applic:[0,9,12,16],appropri:17,ar:[0,3,6,7,11,13,15,16,17],argument:0,around:9,assign_mandelbox:9,assist:9,associ:[0,11,15,16,17],assum:0,asymmetr:11,atom:16,attach:[8,16],attempt:[0,11,17],attribut:[0,17],audienc:11,audit:9,auth0:[0,11,12,15,16,17],auth0_domain:[0,11],auth0_webserver_client_id:[0,11],auth0_webserver_client_secret:[0,11],auth:[0,11],authent:[0,12,15,16,17],author:[11,15,17],auto:9,autogener:13,automat:[0,9,17],avail:[9,11,15,17],aw:[0,2,5,7,12,15],aws_instance_post:[0,2],aws_instance_st:[0,2],aws_instance_type_to_launch:0,aws_mandelbox_assign_post:[0,2],back:[0,16],backend:17,base:[0,1,6,7,11,15,16,17],base_cloud_interfac:[0,5,6],base_ec2_cli:[0,5],bearer:11,becaus:[9,15],been:[0,11,15,16,17],befor:[15,17],begin:[15,16],behavior:17,being:[0,8,9],believ:17,below:[0,13],best:13,between:[6,7,9,15,17],bill:17,bodi:0,bool:[0,1,3,6,8],both:15,branch:[0,8],bring:17,brought:6,browser:[12,16],buffer:16,bui:17,build:16,built:0,builtin:0,bundl:[0,16],busi:12,cach:[9,15,17],calcul:[0,9],call:[0,9,16,17],callabl:8,calle:9,can:[0,3,6,11,15,16,17],cancel:17,cannot:0,capac:16,care:15,caus:17,celeri:16,central:[9,16],check:[3,6,7,15,17],checkout:17,choos:15,chosen:11,chrome:0,claim:[0,12,17],classmethod:1,clear:0,cli:16,client:[0,15,16,17],client_commit_hash:3,client_sha:0,close:[15,16],cloud:[0,7,12,15,16],cloud_interfac:[0,5,6],cloudclient:[6,7],cloudprovid:0,co:[0,11,17],code:[0,16],collect:9,column:0,com:[0,11],command:16,comment:13,commit:[0,8],commit_hash_mismatch:1,commun:[0,11,12],compliant:11,complic:15,comput:[12,17],config:[9,13,16],config_db_url:0,config_t:0,config_table_nam:[0,13],configur:[0,9,12,15,16],conftest:[0,2],connect:[0,6,7,15,16],consid:[11,17],constant:[0,3,6,13],consum:17,contain:[0,1,3,11,15,17],content:13,context:9,continu:[15,17],control:[12,17],correct:11,correctli:[11,17],correspond:[6,9],could:[0,15,17],could_not_lock_inst:1,creat:[3,8,15,16,17],created_at:0,curl:[12,16],current:[0,3,15,17],current_app:9,custom:[0,9,12,15,16,17],dai:17,dashboard:17,data:[0,15,16],databas:[0,12,15],database_url:0,db:3,decid:17,decl_api:0,declar:0,decor:[0,17],decrypt:15,default_instance_buff:0,deferredreflect:0,defin:[0,7,11,17],definit:0,delet:[15,16],delimit:9,demand:15,deni:[16,17],depend:[0,9],deploi:[0,16],deploy:[0,9,11,12,16],deploymentconfig:0,deploymenttestconfig:0,deprovis:16,deriv:0,desir:16,desired_free_mandelbox:0,desktop:[12,15,16,17],destroi:15,detect:0,determin:[0,3,11,15,16,17],dev:[0,16],develop:[0,9,12,16,17],dict:[6,7],differ:9,dimens:9,directli:16,directori:16,disabl:[6,7],disconnect:[15,16],disregard:17,do_scale_up_if_necessari:3,doc:[0,13],docker:0,docstr:13,doe:15,does_not_exist:1,domain:0,don:[11,17],done:11,down:[1,16,17],download:11,downsid:17,drain:0,drive:15,due:[16,17],dure:0,dy:0,dynam:15,e:[0,11,12,15,17],each:[0,6,11,15,16,17],eas:[3,17],easier:9,easili:[11,15,16],ec2:[0,6,16],ec2_instance_st:[0,6,13],ec2_userdata:[0,5],ec2client:6,ec2instancest:[1,6],effect:0,effici:17,either:[0,3,17],elaps:9,elimin:17,els:3,email:8,employe:15,empti:8,en:0,encrypt:15,end:[9,12],endpoint:[0,11,17],enforc:[15,17],enough:15,ensur:11,enter:17,entry_web:13,enumer:[0,1],env:[0,1],env_nam:[0,13],environ:[0,16],ephemer:15,especi:17,etc:12,everi:[6,7,15],everyon:15,everyth:6,exact:17,examin:17,exampl:[0,9,11,15],exceed:17,except:[6,15],execut:0,exist:[6,15,17],exp:11,expect:[4,6],expir:17,explan:11,expos:9,ext:0,extens:0,extern:12,extra:17,extra_dim:9,extract:[9,17],extrem:17,fact:17,factori:0,fail:[0,17],fall:[0,17],fallback:0,fals:[0,6,8],far:15,fetch:0,file:[0,6,9],find:[3,11],find_enabled_region:3,find_inst:3,first:[0,9,17],flask:[0,4,9,16],flask_app:[0,5],flask_view:[0,5],follow:[0,11,15,16,17],force_buff:3,foreign:0,form:17,found:0,fractal:[0,11,17],from:[0,9,11,12,13,15,16,17],from_env:1,from_object:0,frontend:12,fulfil:12,fulli:[6,7],func:8,furthermor:17,g4dn:[6,7],g:[11,12,17],gener:[0,3,5,13],generate_nam:8,get:[0,6,7,11],get_base_free_mandelbox:3,get_instance_st:6,get_ip_of_inst:[6,7],getter:0,gha:12,git:0,github:12,given:[3,6,7],go:6,googl:13,govern:6,grant:[15,16,17],guarante:0,guidelin:11,ha:[0,3,15,16,17],handl:[9,16],hard:15,hardwarewis:[6,7],hash:0,have:[6,7,8,9,11,15,16,17],header:11,heartbeat:16,heavili:16,helper:[0,6,8,13],henc:0,heroku:[0,16],high:[15,17],higher:[9,16],hirefir:12,hold:[3,17],hook:9,hope:17,host:[0,12,17],host_serv:0,host_service_port:0,how:[3,6,7,16],howev:17,http:[0,11,17],i:[0,15,17],iat:11,id:[0,6,7,11,15,17],ideal:15,identifi:0,idl:15,ie:0,imag:[0,7],image_id:[0,6,7],implement:[0,7,12,17],impli:0,inact:17,includ:[0,12,17],incom:[0,12],incomplet:17,incomplete_expir:17,index:12,indic:[0,11,17],indirect:6,influenc:16,info:0,inform:[0,15,17],infrastructur:[12,16],initi:[6,7,15,16],insid:9,instal:16,instanc:[0,3,4,6,7,8,9,12,15,16],instance_id:[0,6,7],instance_nam:[6,7],instance_typ:[0,3,6,7],instancesnotrunningexcept:6,instanti:[0,9],instead:[0,17],instruct:15,integ:9,integr:[11,12],intend:9,interact:16,interfac:[7,12,16],invalid:8,invari:[16,17],invok:16,ip:[6,7],ip_addr:0,ipv4:0,is_user_act:3,issu:[11,15,17],issuer:11,its:[0,11,12,15,17],itself:[0,15],json:[0,9,11],just:15,jwk:11,jwt:15,jwt_algorithm:0,jwt_decode_algorithm:0,jwt_decode_audi:0,keep:[15,16,17],kei:[0,5,6,11,15],key_id:6,keyerror:0,keys_dim:[0,5],keyword:0,know:[16,17],known:[11,15],kwarg:[0,3],la:0,lack:17,last:0,launch:[0,3],layer:6,least:17,let:[16,17],level:[0,13,15],librari:16,lifecycl:0,lightweight:12,like:[16,17],limit:[0,5,17],link:13,list:[0,3,6,7],listen:16,ll:9,load:[0,15,16,17],local:[0,11],local_fil:9,localconfig:0,localtestconfig:0,log:[0,5,9,16,17],log_request:0,log_tim:8,logger:9,logic:12,logz:9,logz_token:9,logziohandl:9,longer:16,look:17,lower:16,machin:[0,16],made:17,mai:[0,15,16,17],main:[0,15],mainli:16,make:15,malfunct:16,manag:[0,12,15,16,17],mandelbox:[0,3,12,15,16],mandelbox_assign_error_nam:[0,3,13],mandelboxassignerror:[1,3],mandelboxhostst:0,mandelboxst:0,mani:[0,3,6,7,12],manual:[16,17],map:[6,7,9],mark:[6,7],match:0,mention:17,method:[0,9],meticul:17,metric:[0,5,15,16],metrics_logg:9,metrics_sink_local_fil:0,metrics_sink_logz_token:0,millisecond:9,minim:15,model:13,modul:12,monitor:12,monoton:9,monotonic_duration_m:9,more:[16,17],most:[11,15,17],move:17,much:17,must:[0,9,11,15,17],name:[0,3,6,7,8],name_gener:[0,5],namespac:11,necess:17,necessari:[15,17],necessarili:[6,7,17],need:[3,6,16,17],neighbor:3,neither:[0,15],nevertheless:17,newer:16,newlin:9,no_instance_avail:1,node:16,non:17,none:[3,4,6,7,8,9],nor:[0,15],normal:0,notabl:16,note:[0,9,11],notifi:[15,16],novalu:0,nullabl:0,num_inst:[6,7],number:[0,3,15,16],oauth:[0,11],object:[0,7,9,17],observ:17,obtain:[15,17],off:[0,6,7,16],older:16,onc:[6,11,15,16,17],one:[0,11,15,17],onli:[3,9,15,16,17],op:0,open:17,optim:[11,12],option:[0,6,8,9],orchestr:16,order:[11,12,15,17],orm:0,os:[0,17],other:[0,12,15,17],otherwis:[6,17],our:[0,6,7,11,12,13,15,16,17],ourselv:15,out:17,outgo:12,over:[6,16],overrid:[0,3],overridden:16,own:[3,15,17],packag:[12,13],page:12,pai:17,palletsproject:0,param:[3,6,7,8],paramet:[0,6],pars:0,parse_request:0,part:[16,17],particular:[0,16],pass:[0,6,7],past_du:17,payload:[11,15,17],payment:[12,16],payment_portal_url:17,payment_requir:17,pend:1,per:11,perform:[15,16],period:16,persist:15,ping:0,platform:0,point:[15,16],poll:[6,7],pool:15,popul:9,port:0,portal:12,possibl:[0,16,17],post:0,postgres_password:0,postgresql:0,postgressql:16,postman:[12,16],potenti:9,practic:15,pre_connect:0,preconfigur:16,prefix:8,prepar:0,price:0,primari:0,primary_kei:0,process:[0,9,16,17],procur:15,prod:16,product:[0,11],properli:16,properti:[0,6,7],protect:[11,17],protocol:[12,15],provid:[0,6,7,9,12],provis:[6,15,16],proxim:3,purchas:17,purpos:16,py:0,python:[0,16],quarter:17,queri:[12,15,17],quicker:15,quickli:15,rais:0,random:8,rate:17,rather:16,re:[6,7,15,17],read:[0,11,15,16],readi:[6,7],real:9,realli:15,receipt:11,receiv:[8,12,15,17],recent:17,recieved_from:0,recommend:3,record:[0,9,11,17],record_metr:9,reduc:15,redund:15,region:[0,3,6,16],region_nam:6,region_not_en:1,regist:[0,9,16],register_flask_view_metrics_monitor:9,relationshipproperti:0,releas:16,remaining_capac:0,renew:17,report:9,repres:[0,9,17],request:[0,9,11,12,15,16,17],requir:11,resourc:[8,11,15,16,17],respect:17,respons:[12,16],rest:[6,17],result:9,retriev:0,review:0,rfc:11,risk:17,round:[9,17],row:0,rs256:[0,11],rule:17,run:[0,1,3,6,7,12,15,16],runtim:16,s3:15,s:[0,3,8,9,11,12,15,17],safe:17,same:17,sanit:[0,5],sanitize_email:8,scale:[3,12,16],scenario:17,scheme:0,scope:15,search:12,second:[6,7,17],secret:0,section:[11,17],see:[0,9,11,15,16],select:0,self:0,send:[12,16,17],sent:[9,11],sentry_dsn:0,serv:15,server:[0,11,12,15],servic:[0,12,17],session:[0,12,15,16,17],session_id:0,set:[0,9,11,16],setup:9,setup_metrics_logg:9,sh:6,sha:0,share:[16,17],ship:9,should:[0,6,7,8,9,17],shut:[1,16],shutting_down:1,side:[16,17],sign:[11,15,17],signatur:[11,15],signific:15,silenced_endpoint:0,similar:6,sinc:[0,11],singleton:9,skip:15,so:[6,15,16,17],some:15,sort:3,sourc:0,space:3,specif:[0,3,11,15,16,17],specifi:[0,6,7],spin:3,spin_til_instances_not_run:6,spin_til_instances_run:[6,7],sqlalchemi:0,sqlalchemy_database_uri:0,sqlalchemy_track_modif:0,stage:[0,9,16],standard:[0,9,11],start:[0,4,6,7,9,16],start_inst:[6,7],starter:8,starter_nam:8,startup:16,state:[0,6,15,17],statu:[0,11,12,15,16],step:[15,16],stop:[1,15],stop_inst:[6,7],store:[9,15,17],str:[0,1,3,6,7,8,9],stream:[0,12,16],string:[0,8,11,17],stripe:[0,11,12,15],stripe_api_kei:17,stripe_customer_id:[0,11,17],stripe_customer_id_claim:[0,17],stripe_price_id:[0,17],stripe_secret:[0,17],stripe_subscription_status_claim:[0,17],style:13,submodul:[2,5,13],subpackag:13,subscrib:15,subscript:[0,11,12,15,16],subscription_object:0,subscription_statu:[0,11,17],subsequ:[9,17],succe:[3,17],suitabl:0,suppli:[9,15],support:[0,9],sure:15,sync:17,syntax:0,system:15,t:[11,17],tabl:0,take:[15,17],taken:15,task_definit:0,task_nam:9,technic:17,tell:16,tenant:[0,11,15,17],terimin:17,term:15,termin:[1,17],test:[0,2,3,8,12,16],test_ec2_cli:[0,2],test_prefix:8,test_singl:4,testconfig:0,than:[9,15,16,17],thei:[0,7,15],theori:17,thi:[0,3,6,7,8,9,15,16,17],those:[0,3,15,17],three:15,thrown:6,time:[0,5,9,11,15,16,17],time_to_create_row:9,time_to_find_inst:9,time_wait:[6,7],token:[0,9,12,15,17],took:9,tool:[12,16],top:13,total_request_tim:9,track:[15,16],tri:0,trial:[15,17],trigger:16,trip:17,trust:15,tty:16,turn:[6,7],two:[9,11],type:[0,3,6,7,8],ui:17,uid:8,uinput:16,un:17,unaccept:17,undefin:1,under:17,underli:0,union:[3,9],uniqu:0,unknown:0,unless:0,unpaid:17,unrecogn:0,unsafe_email:8,unsanit:8,until:[6,7],up:[3,6,9,16,17],updat:[0,16,17],updated_at:0,upload:15,upon:[11,15],url:[0,11,17],us:[0,3,6,7,9,11,12,13,15,16,17],user:[0,3,11,12,15,17],user_already_act:1,user_id:0,userdata:6,userload:15,usernam:3,usual:17,util:[0,13,16],valid:[8,12,15],valu:[0,1,6,9,17],vanish:15,variabl:[0,11,16,17],variant:9,varieti:17,variou:12,verif:11,verifi:[11,15],version:[9,16],via:[6,16],view_func:0,violat:16,virtual:0,vm:0,wa:[0,15],wait:[6,7,15],want:[3,15],we:[0,3,11,15,16,17],web:[9,11,15,16],webserv:[0,11,16,17],webserver_url:0,well:[0,11,17],were:[0,15],what:[6,7],when:[0,6,13,15,16,17],whenev:16,where:9,whether:[0,3,8,11,15,17],which:[0,3,6,7,8,9,15,16,17],whist:[0,11,15,17],whist_pre_process:0,whistappl:0,who:[0,15,17],whose:[0,17],why:11,within:0,without:15,word:15,work:[4,13],worker:16,workflow:12,worst:17,worth:17,would:[0,17],wrapper:9,written:9,x:[0,3],yet:[6,7],you:6},titles:["app package","app.constants package","app.helpers package","app.helpers.aws package","app.helpers.tests package","app.utils package","app.utils.aws package","app.utils.cloud_interface package","app.utils.general package","app.utils.metrics package","auth0","Authentication","Welcome to the Whist Webserver internal documentation!","Module Documentation","Payments","Webserver Responsibilities","Other Services","Stripe Integration"],titleterms:{access:15,action:16,agent:16,app:[0,1,2,3,4,5,6,7,8,9],applic:15,auth0:10,authent:11,aw:[3,6,16],aws_instance_post:3,aws_instance_st:3,aws_mandelbox_assign_post:3,base_cloud_interfac:7,base_ec2_cli:6,claim:11,cloud_interfac:7,comput:15,config:0,config_table_nam:1,configur:[11,17],conftest:4,constant:1,content:[0,1,2,3,4,5,6,7,8,9,12],control:15,custom:11,databas:16,document:[12,13],ec2_instance_st:1,ec2_userdata:6,end:15,entry_web:0,env_nam:1,flask_app:9,flask_view:9,gener:8,github:16,helper:[2,3,4],hirefir:16,host:16,indic:12,integr:17,intern:12,introduct:12,kei:9,keys_dim:9,limit:8,log:8,mandelbox_assign_error_nam:1,metric:9,model:0,modul:[0,1,2,3,4,5,6,7,8,9,13],name_gener:8,optim:17,other:16,packag:[0,1,2,3,4,5,6,7,8,9],payment:[14,17],portal:17,protocol:16,respons:15,sanit:8,scale:15,server:16,servic:16,start:15,statu:17,stream:15,stripe:[16,17],submodul:[0,1,3,4,6,7,8,9],subpackag:[0,2,5],subscript:17,tabl:12,test:4,test_ec2_cli:4,time:8,token:11,user:16,util:[5,6,7,8,9],valid:11,webserv:[12,15],welcom:12,whist:[12,16],workflow:16}})