Search.setIndex({docnames:["app","app.blueprints","app.blueprints.aws","app.blueprints.host_service","app.blueprints.mail","app.constants","app.helpers","app.helpers.blueprint_helpers","app.helpers.blueprint_helpers.aws","app.helpers.blueprint_helpers.host_service","app.helpers.blueprint_helpers.mail","app.helpers.helpers_tests","app.helpers.helpers_tests.aws_tests","app.helpers.utils","app.helpers.utils.auth0","app.helpers.utils.aws","app.helpers.utils.cloud_interface","app.helpers.utils.event_logging","app.helpers.utils.general","app.helpers.utils.mail","app.helpers.utils.metrics","app.models","architecture","index","module_docs","modules","responsibilities","services"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["app.rst","app.blueprints.rst","app.blueprints.aws.rst","app.blueprints.host_service.rst","app.blueprints.mail.rst","app.constants.rst","app.helpers.rst","app.helpers.blueprint_helpers.rst","app.helpers.blueprint_helpers.aws.rst","app.helpers.blueprint_helpers.host_service.rst","app.helpers.blueprint_helpers.mail.rst","app.helpers.helpers_tests.rst","app.helpers.helpers_tests.aws_tests.rst","app.helpers.utils.rst","app.helpers.utils.auth0.rst","app.helpers.utils.aws.rst","app.helpers.utils.cloud_interface.rst","app.helpers.utils.event_logging.rst","app.helpers.utils.general.rst","app.helpers.utils.mail.rst","app.helpers.utils.metrics.rst","app.models.rst","architecture.rst","index.rst","module_docs.rst","modules.rst","responsibilities.rst","services.rst"],objects:{"":{app:[0,0,0,"-"]},"app.blueprints":{aws:[2,0,0,"-"],host_service:[3,0,0,"-"],mail:[4,0,0,"-"]},"app.blueprints.aws":{aws_mandelbox_blueprint:[2,0,0,"-"]},"app.blueprints.aws.aws_mandelbox_blueprint":{aws_mandelbox_assign:[2,1,1,""],regions:[2,1,1,""]},"app.config":{DeploymentConfig:[0,2,1,""],DeploymentTestConfig:[0,4,1,""],LocalConfig:[0,2,1,""],LocalTestConfig:[0,4,1,""],getter:[0,1,1,""]},"app.config.DeploymentConfig":{APP_GIT_BRANCH:[0,3,1,""],APP_GIT_COMMIT:[0,3,1,""],AUTH0_DOMAIN:[0,3,1,""],AUTH0_WEBSERVER_CLIENT_ID:[0,3,1,""],AUTH0_WEBSERVER_CLIENT_SECRET:[0,3,1,""],AWS_INSTANCE_TYPE_TO_LAUNCH:[0,3,1,""],AWS_TASKS_PER_INSTANCE:[0,3,1,""],DEFAULT_INSTANCE_BUFFER:[0,3,1,""],DESIRED_FREE_MANDELBOXES:[0,3,1,""],ENDPOINT_SECRET:[0,3,1,""],ENVIRONMENT:[0,3,1,""],FRONTEND_URL:[0,3,1,""],HOST_SERVER:[0,3,1,""],HOST_SERVICE_PORT:[0,3,1,""],JWT_ALGORITHM:[0,4,1,""],JWT_DECODE_ALGORITHMS:[0,4,1,""],JWT_DECODE_AUDIENCE:[0,4,1,""],METRICS_SINK_LOCAL_FILE:[0,3,1,""],METRICS_SINK_LOGZ_TOKEN:[0,3,1,""],RUNNING_LOCALLY:[0,3,1,""],SENDGRID_API_KEY:[0,3,1,""],SENDGRID_DEFAULT_FROM:[0,4,1,""],SENTRY_DSN:[0,3,1,""],SILENCED_ENDPOINTS:[0,4,1,""],SQLALCHEMY_DATABASE_URI:[0,3,1,""],SQLALCHEMY_TRACK_MODIFICATIONS:[0,4,1,""],STRIPE_CUSTOMER_ID_CLAIM:[0,4,1,""],STRIPE_PRICE_ID:[0,3,1,""],STRIPE_SECRET:[0,3,1,""],config_table:[0,3,1,""],database_url:[0,3,1,""]},"app.config.LocalConfig":{APP_GIT_BRANCH:[0,3,1,""],APP_GIT_COMMIT:[0,3,1,""],AUTH0_DOMAIN:[0,3,1,""],AUTH0_WEBSERVER_CLIENT_ID:[0,3,1,""],AUTH0_WEBSERVER_CLIENT_SECRET:[0,3,1,""],AWS_TASKS_PER_INSTANCE:[0,3,1,""],ENVIRONMENT:[0,3,1,""],HOST_SERVER:[0,4,1,""],SENTRY_DSN:[0,4,1,""],STRIPE_SECRET:[0,3,1,""]},"app.constants":{config_table_names:[5,0,0,"-"],env_names:[5,0,0,"-"],instance_state_values:[5,0,0,"-"]},"app.constants.config_table_names":{from_env:[5,1,1,""]},"app.constants.instance_state_values":{InstanceState:[5,2,1,""]},"app.constants.instance_state_values.InstanceState":{ACTIVE:[5,4,1,""],DRAINING:[5,4,1,""],HOST_SERVICE_UNRESPONSIVE:[5,4,1,""],PRE_CONNECTION:[5,4,1,""]},"app.exceptions":{SentryInitializationError:[0,5,1,""]},"app.factory":{create_app:[0,1,1,""],decode_key_callback:[0,1,1,""],register_blueprints:[0,1,1,""],register_commands:[0,1,1,""],register_handlers:[0,1,1,""]},"app.flask_handlers":{can_process_requests:[0,1,1,""],can_process_requests_handler:[0,1,1,""],set_web_requests_status:[0,1,1,""]},"app.helpers":{blueprint_helpers:[7,0,0,"-"],helpers_tests:[11,0,0,"-"],utils:[13,0,0,"-"]},"app.helpers.blueprint_helpers":{aws:[8,0,0,"-"],host_service:[9,0,0,"-"],mail:[10,0,0,"-"]},"app.helpers.blueprint_helpers.aws":{aws_instance_post:[8,0,0,"-"],aws_instance_state:[8,0,0,"-"],aws_mandelbox_assign_post:[8,0,0,"-"]},"app.helpers.blueprint_helpers.aws.aws_instance_post":{check_and_handle_lingering_instances:[8,1,1,""],do_scale_up_if_necessary:[8,1,1,""],drain_instance:[8,1,1,""],find_instance:[8,1,1,""],get_base_free_mandelboxes:[8,1,1,""],repeated_lingering_harness:[8,1,1,""],repeated_scale_down_harness:[8,1,1,""],terminate_instance:[8,1,1,""],try_scale_down_if_necessary:[8,1,1,""],try_scale_down_if_necessary_all_regions:[8,1,1,""]},"app.helpers.blueprint_helpers.aws.aws_mandelbox_assign_post":{is_user_active:[8,1,1,""]},"app.helpers.helpers_tests":{aws_tests:[12,0,0,"-"],conftest:[11,0,0,"-"]},"app.helpers.helpers_tests.aws_tests":{test_ec2_client:[12,0,0,"-"]},"app.helpers.helpers_tests.aws_tests.test_ec2_client":{test_single:[12,1,1,""]},"app.helpers.helpers_tests.conftest":{app:[11,1,1,""]},"app.helpers.utils":{auth0:[14,0,0,"-"],aws:[15,0,0,"-"],cloud_interface:[16,0,0,"-"],event_logging:[17,0,0,"-"],general:[18,0,0,"-"],mail:[19,0,0,"-"],metrics:[20,0,0,"-"]},"app.helpers.utils.auth0":{auth0:[14,0,0,"-"]},"app.helpers.utils.auth0.auth0":{Auth0Client:[14,2,1,""],M2MAccessToken:[14,2,1,""]},"app.helpers.utils.auth0.auth0.Auth0Client":{token:[14,6,1,""]},"app.helpers.utils.auth0.auth0.M2MAccessToken":{access_token:[14,4,1,""],expires:[14,4,1,""]},"app.helpers.utils.aws":{base_ec2_client:[15,0,0,"-"],ec2_userdata:[15,0,0,"-"]},"app.helpers.utils.aws.base_ec2_client":{EC2Client:[15,2,1,""],InstancesNotRunningException:[15,5,1,""]},"app.helpers.utils.aws.base_ec2_client.EC2Client":{check_if_instances_down:[15,6,1,""],check_if_instances_up:[15,6,1,""],get_ip_of_instances:[15,6,1,""],spin_til_instances_down:[15,6,1,""],spin_til_instances_up:[15,6,1,""],start_instances:[15,6,1,""],stop_instances:[15,6,1,""]},"app.helpers.utils.cloud_interface":{base_cloud_interface:[16,0,0,"-"]},"app.helpers.utils.cloud_interface.base_cloud_interface":{CloudClient:[16,2,1,""]},"app.helpers.utils.cloud_interface.base_cloud_interface.CloudClient":{get_ip_of_instances:[16,6,1,""],spin_til_instances_down:[16,6,1,""],spin_til_instances_up:[16,6,1,""],start_instances:[16,6,1,""],stop_instances:[16,6,1,""]},"app.helpers.utils.event_logging":{event_tags:[17,0,0,"-"],event_text:[17,0,0,"-"],events:[17,0,0,"-"]},"app.helpers.utils.event_logging.event_tags":{valid_tags:[17,1,1,""]},"app.helpers.utils.event_logging.event_text":{format_into_text:[17,1,1,""],to_text:[17,1,1,""]},"app.helpers.utils.event_logging.events":{basic_logging_event:[17,1,1,""],lifecycle_getter:[17,1,1,""],logged_event_cluster_created:[17,1,1,""],logged_event_cluster_deleted:[17,1,1,""],logged_event_cluster_lifecycle:[17,1,1,""],logged_event_mandelbox_assigned:[17,1,1,""],logged_event_mandelbox_deleted:[17,1,1,""],logged_event_mandelbox_lifecycle:[17,1,1,""],logged_event_mandelbox_prewarmed:[17,1,1,""]},"app.helpers.utils.general":{auth:[18,0,0,"-"],limiter:[18,0,0,"-"],logs:[18,0,0,"-"],name_generation:[18,0,0,"-"],sql_commands:[18,0,0,"-"],timing:[18,0,0,"-"],tokens:[18,0,0,"-"]},"app.helpers.utils.general.name_generation":{generate_name:[18,1,1,""]},"app.helpers.utils.general.sql_commands":{fractal_sql_commit:[18,1,1,""],fractal_sql_update:[18,1,1,""]},"app.helpers.utils.general.timing":{log_time:[18,1,1,""]},"app.helpers.utils.general.tokens":{get_access_tokens:[18,1,1,""]},"app.helpers.utils.metrics":{flask_app:[20,0,0,"-"],flask_view:[20,0,0,"-"],keys:[20,0,0,"-"],keys_dims:[20,0,0,"-"],monotonic_duration_ms:[20,1,1,""],record_metrics:[20,1,1,""],setup_metrics_logger:[20,1,1,""]},"app.helpers.utils.metrics.flask_app":{app_record_metrics:[20,1,1,""]},"app.helpers.utils.metrics.flask_view":{register_flask_view_metrics_monitor:[20,1,1,""]},"app.models":{hardware:[21,0,0,"-"]},"app.models.hardware":{InstanceInfo:[21,2,1,""],InstancesWithRoomForMandelboxes:[21,2,1,""],LingeringInstances:[21,2,1,""],MandelboxInfo:[21,2,1,""],RegionToAmi:[21,2,1,""]},"app.models.hardware.InstanceInfo":{aws_ami_id:[21,4,1,"id0"],aws_instance_type:[21,4,1,""],cloud_provider_id:[21,4,1,"id1"],commit_hash:[21,4,1,"id2"],creation_time_utc_unix_ms:[21,4,1,"id3"],gpu_vram_remaining_kb:[21,4,1,"id4"],instance_name:[21,4,1,"id5"],instance_type:[21,4,1,""],ip:[21,4,1,"id6"],last_updated_utc_unix_ms:[21,4,1,"id7"],location:[21,4,1,"id8"],mandelbox_capacity:[21,4,1,"id9"],memory_remaining_kb:[21,4,1,"id10"],nanocpus_remaining:[21,4,1,"id11"],status:[21,4,1,"id12"]},"app.models.hardware.InstancesWithRoomForMandelboxes":{ami_id:[21,4,1,""],aws_ami_id:[21,4,1,""],commit_hash:[21,4,1,""],instance_name:[21,4,1,"id13"],location:[21,4,1,"id14"],mandelbox_capacity:[21,4,1,"id15"],num_running_mandelboxes:[21,4,1,"id16"],status:[21,4,1,"id17"]},"app.models.hardware.LingeringInstances":{cloud_provider_id:[21,4,1,"id18"],instance_name:[21,4,1,"id19"],status:[21,4,1,"id20"]},"app.models.hardware.MandelboxInfo":{creation_time_utc_unix_ms:[21,4,1,""],instance_name:[21,4,1,"id21"],mandelbox_id:[21,4,1,"id22"],status:[21,4,1,"id23"],user_id:[21,4,1,"id24"]},"app.models.hardware.RegionToAmi":{ami_active:[21,4,1,"id25"],ami_id:[21,4,1,"id26"],client_commit_hash:[21,4,1,"id27"],protected_from_scale_down:[21,4,1,"id28"],region_name:[21,4,1,"id29"]},"app.sentry":{init_and_ensure_sentry_connection:[0,1,1,""]},"app.signals":{WebSignalHandler:[0,2,1,""]},"app.signals.WebSignalHandler":{handle_sigterm:[0,6,1,""]},"app.validation":{MandelboxAssignBody:[0,2,1,""]},"app.validation.MandelboxAssignBody":{client_commit_hash:[0,4,1,""],region:[0,4,1,""]},app:{blueprints:[1,0,0,"-"],config:[0,0,0,"-"],constants:[5,0,0,"-"],exceptions:[0,0,0,"-"],factory:[0,0,0,"-"],flask_handlers:[0,0,0,"-"],fractal_pre_process:[0,1,1,""],helpers:[6,0,0,"-"],log_request:[0,1,1,""],models:[21,0,0,"-"],parse_request:[0,1,1,""],sentry:[0,0,0,"-"],signals:[0,0,0,"-"],validation:[0,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","property","Python property"],"4":["py","attribute","Python attribute"],"5":["py","exception","Python exception"],"6":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:property","4":"py:attribute","5":"py:exception","6":"py:method"},terms:{"0":8,"1":[0,15,16,20,21,26],"10":[15,16,22],"12xlarg":[15,16],"15":21,"2":[17,21,26],"2fa":14,"3":26,"30":0,"50":22,"abstract":16,"boolean":[0,15,17,21],"case":[0,17,22],"class":[0,5,14,15,16,21],"default":[0,17,20],"do":[0,17,26],"enum":5,"float":[14,20,21],"function":[0,8,18,22,24,26],"import":15,"int":[0,8,15,16,17,20,21],"long":[15,16,17,22],"new":[8,26,27],"public":[21,22,26],"return":[0,2,8,12,14,15,16,17,18,22,26],"switch":27,"true":[0,8,17,21],"var":0,"while":[22,26],A:[0,2,20,21,22],As:[0,22],At:26,But:21,By:26,For:[0,22,26],If:[0,8,20,22,26],In:[14,17,22,23,26,27],Is:8,It:[0,17,22,23,26,27],Its:23,NO:20,NOT:[0,20],On:27,The:[0,8,14,17,20,21,22,23,24,26,27],There:17,These:[0,24],_end_evt_nam:17,_end_evt_typ:17,_f:0,_get_num_new_inst:8,_kwarg:2,_region_name_ami_id_unique_constraint:21,_testconfig:0,_unverified_payload:0,_web_requests_en:0,abl:[22,26],about:[0,20,21,22,26],abov:[17,22,27],accept:22,access:[14,15,22,23],access_kei:15,access_token:14,accord:0,accordingli:27,account:27,acquir:0,across:[22,27],act:22,action:23,activ:[5,16,21,23,26,27],actual:[0,26,27],ad:27,add:[8,22,27],addit:[14,20],address:[15,16],admin:26,administr:[26,27],advanc:26,advantag:26,again:22,against:27,agent:23,alia:0,aliv:27,all:[0,8,15,16,20,21,22,23,24,26,27],alloc:[26,27],allow:[0,2,17,22,26,27],along:[17,27],alongsid:20,alreadi:[8,22],also:[0,22,23,27],although:26,ami:[8,15,21,27],ami_act:21,ami_id:21,amount:[17,22,26],an:[0,5,8,12,15,17,20,21,22,26,27],analysi:17,ani:[0,8,17,20,21,22,26],anoth:22,api:[0,14,26,27],app:[22,23,24],app_git_branch:0,app_git_commit:0,app_record_metr:20,appear:22,appfactori:0,applic:[0,8,20,22,23,27],approxim:22,ar:[0,2,15,16,17,21,22,24,26,27],architectur:23,arg:18,argument:0,around:20,assign:17,assign_mandelbox:20,assist:20,associ:[0,26,27],assum:0,asynchron:22,atom:27,attach:[18,22,27],attempt:[0,8],attribut:[0,18],audit:20,auth0:[6,13,23,26,27],auth0_client_id:14,auth0_client_secret:14,auth0_domain:[0,14],auth0_webserver_client_id:0,auth0_webserver_client_secret:0,auth0client:14,auth:[6,13],authent:[14,23,26,27],author:26,auto:20,autogener:24,automat:[0,20,22],avail:[20,22,26],avoid:22,aw:[0,1,6,7,13,16,21,23,26],aws_ami_id:21,aws_instance_post:[6,7],aws_instance_st:[6,7],aws_instance_typ:21,aws_instance_type_to_launch:0,aws_mandelbox_assign:2,aws_mandelbox_assign_post:[6,7],aws_mandelbox_blueprint:[0,1],aws_tasks_per_inst:0,aws_test:[6,11],back:[0,21,27],backend:22,background:8,balanc:22,base:[0,5,14,15,16,21,22,26,27],base_cloud_interfac:[6,13,15],base_ec2_cli:[6,13],basemodel:0,basic_logging_ev:17,becaus:[0,20,22,26],becom:22,been:[0,22,26,27],befor:[0,22,26],before_request:0,begin:[26,27],being:[0,17,18,20,22],below:[0,24],best:24,between:[15,16,20,22,26],block:22,blueprint:[0,24,25],blueprint_help:[0,6],bodi:[0,2,17],bool:[0,8,15,17,18,21],both:[22,26],branch:[0,18],broker:22,brought:15,browser:[23,27],buffer:[21,27],build:27,built:0,builtin:0,bundl:[0,27],busi:23,cach:[20,26],calcul:[0,17,20],call:[0,8,20,21,22,27],calle:20,caller:22,can:[0,8,15,21,22,26,27],can_process_request:0,can_process_requests_handl:0,cannot:[0,8],capac:[22,27],care:26,categor:17,categoriz:17,celeri:[20,22,27],central:[20,27],challeng:22,chanc:0,channel:22,check:[8,15,16,17,26],check_and_handle_lingering_inst:8,check_if_instances_down:15,check_if_instances_up:15,choos:26,chosen:22,classifi:22,clean:0,cleanli:0,clear:0,cli:[0,27],client:[0,8,21,22,26,27],client_commit_hash:[0,8,21],close:[22,26,27],cloud:[16,23,26,27],cloud_interfac:[6,13,15],cloud_provider_id:21,cloudclient:[15,16],cluster:17,cluster_nam:17,co:0,code:[0,22,27],collect:[0,17,20],com:0,command:[0,22,27],comment:24,commit:[0,18,21],commit_hash:21,commun:[22,23],complet:22,complic:26,comput:[22,23],concurr:22,condit:0,config:[20,24,25,27],config_db_url:0,config_t:0,config_table_nam:[0,25],configur:[0,20,26,27],conftest:[0,6],connect:[0,26,27],consol:21,constant:[0,15,24,25],constraint:21,contain:[0,8,14,17,26],content:[24,25],context:[8,20],continu:26,control:23,copi:22,correctli:0,correspond:[15,17,20,21],could:[0,22,26],count:20,cpu:21,creat:[8,17,18,21,26,27],create_app:0,creation:17,creation_time_utc_unix_m:21,curl:[23,27],current:[0,14,21,26],current_app:20,cursori:17,custom:[20,26,27],data:[0,22,26,27],databas:[0,21,23,26],database_url:0,db63f4cbb9bd49a1a1fdab7aeb1f77e6:0,db:[8,18,21],dead:15,debug:0,decid:22,decl_api:21,decode_key_callback:0,decode_key_load:0,decor:0,decreas:22,decrypt:26,default_instance_buff:0,defin:[0,16,22],definit:0,delet:[17,26,27],delimit:20,demand:26,deni:27,depend:[0,20],deploi:[0,2,22,27],deploy:[0,20,22,23,27],deploymentconfig:0,deploymenttestconfig:0,deprovis:27,deriv:0,descript:17,desir:[0,27],desired_free_mandelbox:0,desktop:[22,23,26,27],destroi:26,detail:[0,17,21],detect:0,determin:[0,8,22,26,27],dev:27,develop:[0,20,23,27],dict:[15,16],did:21,didn:21,differ:[17,20,22],dimens:20,directli:27,directori:27,disabl:[15,16],disconnect:[26,27],distanc:17,do_scale_up_if_necessari:8,doc:[0,24],docstr:24,doe:[21,26],don:0,down:[8,16,17,22,27],drain:[5,8,21],drain_inst:8,drive:26,due:27,dure:[0,22],dynam:[0,26],dyno:[0,22],e:[0,21,23,26],each:[0,2,22,26,27],eas:8,easier:20,easili:[17,26,27],east:21,ec2:[15,21,27],ec2_userdata:[6,13],ec2client:15,effect:[0,17,22],either:[0,8,21,22],elaps:20,els:8,elsewher:17,employe:26,en:0,enabl:0,encrypt:26,end:[17,20,23],endpoint:0,endpoint_secret:0,enforc:26,enough:26,enqueu:22,enrol:14,entri:22,enumer:5,env:[0,5],env_nam:[0,25],environ:[0,27],ephemer:26,error:[0,8],etc:[17,21,23],even:22,event:[6,13],event_log:[6,13],event_tag:[6,13],event_text:[6,13],everi:[8,15,16,26],everyon:26,everyth:15,exampl:[0,20,22,26],except:[15,17,24,25,26],execut:0,exist:[15,21,26],expect:[12,15,21],experiment:0,expir:14,expos:20,extend:0,extern:[0,22,23],extra_dim:20,extract:20,fact:22,factori:[24,25],fail:0,fall:0,fallback:0,fals:[0,17,18],far:26,fetch:0,few:22,file:[0,15,20],filter:17,find:[8,17,21],find_inst:8,first:[0,20,22],flag:0,flask:[0,8,20,22,27],flask_app:[6,8,13],flask_handl:[24,25],flask_jwt_extend:0,flask_view:[6,13],flip:0,follow:[0,22,26,27],force_buff:8,format_into_text:17,found:0,fractal:[0,22,26],fractal_pre_process:0,fractal_sql_commit:18,fractal_sql_upd:18,frame:0,framework:22,from:[0,20,21,22,23,24,26,27],from_env:5,from_object:0,frontend:23,frontend_url:0,fulfil:23,func:[0,18],futur:[14,17],g4dn:[15,16],g:23,gener:[0,6,8,13,14,21,22,24],generate_nam:18,get:[0,8,15,16],get_access_token:18,get_base_free_mandelbox:8,get_ip_of_inst:[15,16],getter:0,gha:23,git:0,github:23,give:17,given:[0,8,15,16,17],global:[21,22],go:15,goal:17,good:8,googl:24,govern:15,gpu:21,gpu_vram_remaining_kb:21,grant:[26,27],group:22,guarante:0,ha:[0,8,17,22,26,27],had:22,handl:[0,20,22,27],handle_sigterm:0,handler:0,happen:0,hard:26,hardwar:[0,8,25],hardwarewis:[15,16],hash:21,have:[15,16,18,20,21,22,26,27],haven:21,heartbeat:27,heavili:27,helper:[0,24,25],helpers_test:[0,6],henc:0,here:[0,22],heroku:[0,22,27],high:26,higher:[20,27],highlight:0,hirefir:[22,23],hold:8,hook:20,host:[14,23],host_serv:0,host_servic:[0,1,6,7],host_service_port:0,host_service_unrespons:[5,21],how:[0,8,15,16,17,21,27],html:0,http:[0,23],i:[0,21,26],id:[0,15,16,21,22,26],idea:17,ideal:26,identifi:[0,21,22],idl:26,ie:0,imag:[16,21],image_id:[15,16],immedi:22,implement:[0,16,22,23],impli:0,improv:22,inact:8,includ:[0,21,23],incom:[0,22,23],increas:22,independ:22,index:23,indic:[0,21],indirect:15,individu:21,influenc:27,info:0,inform:[0,17,21,22,26],infrastructur:[21,23,27],init_and_ensure_sentry_connect:0,initi:[0,21,26,27],input:22,insid:20,inspir:0,instal:[0,27],instanc:[0,8,12,15,16,18,20,21,22,23,26,27],instance_id:[15,16],instance_nam:[15,16,21],instance_state_valu:[0,25],instance_typ:[8,15,16,21],instanceinfo:[8,21],instancesnotrunningexcept:15,instancest:5,instanceswithroomformandelbox:21,instanti:[0,20],instead:[0,17,22],instruct:26,integ:20,integr:0,intend:20,intens:22,interact:27,interest:22,interfac:[16,23,27],intern:14,interrupt:0,invari:27,invok:27,io:0,ip:[15,16,21],is_user_act:8,isn:21,issu:26,its:[22,23,26],itself:[17,22,26],json:[0,20],just:[17,26],jwk:0,jwt:[0,26],jwt_algorithm:0,jwt_decode_algorithm:0,jwt_decode_audi:0,jwtmanag:0,keep:[8,17,26,27],kei:[0,6,13,15,22,26],key_id:15,key_val_stor:17,keyerror:0,keys_dim:[6,13],keyword:0,kill:0,know:27,known:26,kwarg:[0,8,17,21],la:0,larg:22,last:21,last_updated_utc_unix_m:21,latest:21,launch:[8,22],layer:15,least:[0,22],left:22,length:17,let:[17,22,27],level:[0,24,26],librari:27,lifecycl:17,lifecycle_gett:17,lightweight:23,like:[21,27],limit:[6,13],linger:8,lingeringinst:21,link:[21,24],list:[2,8,15,16,17,21],listen:27,live:[15,21],ll:20,load:[22,26,27],local:0,local_fil:20,localconfig:0,localproxi:8,localtestconfig:0,locat:21,lock:0,log:[0,6,8,13,17,20,27],log_request:0,log_tim:18,logged_event_cluster_cr:17,logged_event_cluster_delet:17,logged_event_cluster_lifecycl:17,logged_event_mandelbox_assign:17,logged_event_mandelbox_delet:17,logged_event_mandelbox_lifecycl:17,logged_event_mandelbox_prewarm:17,logger:20,logic:23,logz:[17,20],logz_token:20,logziohandl:20,longer:27,loop:8,lot:22,lower:27,m2maccesstoken:14,machin:[0,14,21,27],mai:[0,14,22,26,27],mail:[0,1,6,7,13],main:[0,17,26],mainli:27,make:[0,17,22,26],malfunct:27,manag:[14,23,26,27],mandelbox:[8,17,21,23,26,27],mandelbox_capac:21,mandelbox_id:21,mandelbox_nam:17,mandelbox_us:17,mandelboxassignbodi:[0,2],mandelboxinfo:21,mani:[0,8,15,16,21,22,23],manner:0,manual:[0,8,21,27],map:[15,16,20,21],mark:[8,21],massiv:22,match:[0,22],mean:22,meant:17,measur:17,memori:22,memory_remaining_kb:21,mention:22,messag:0,metadata:22,method:[0,14,17,20],metric:[6,13,17,26,27],metrics_logg:20,metrics_sink_local_fil:0,metrics_sink_logz_token:0,might:0,millisecond:[20,22],min:21,minim:26,minimum:17,model:[0,8,24,25],modul:[23,25],monitor:23,monoton:20,monotonic_duration_m:20,more:[0,17,22,27],most:[17,21,22,26],move:22,ms:20,much:22,multipl:22,must:[0,20,26],naiv:17,name:[0,2,8,15,16,17,18,21],name_gener:[6,13],nanocpus_remain:21,necessari:26,need:[0,8,15,22,27],neighbor:8,neither:[0,26],network:22,newer:27,newlin:20,node:27,none:[0,8,12,15,16,17,18,20],nor:[0,26],norepli:0,normal:0,notabl:27,note:[0,8,20,22],notifi:[26,27],notion:0,now:[0,17],num_inst:[15,16],num_running_mandelbox:21,number:[8,22,26,27],obj:18,object:[0,14,16,20],observ:17,obtain:26,off:[0,15,16,27],offer:14,often:8,older:27,onc:[15,21,26,27],one:[0,17,22,26],ongo:0,onli:[0,8,20,22,26,27],op:0,oper:[8,17],option:[0,8,15,17,18,20],orchestr:27,order:[23,26],orm:21,os:0,other:[0,22,23,26],otherwis:0,our:[0,8,15,16,17,21,22,23,24,26,27],ourselv:26,out:0,outgo:23,outlin:0,over:[15,27],overal:22,overrid:[0,8],overridden:27,own:[8,22,26],packag:[22,24,25],page:23,pair:[8,22],palletsproject:0,param:[8,15,16,18],paramet:[0,8,17],pars:0,parse_request:0,part:27,particular:[0,27],pass:[0,15,16],pattern:0,payload:26,payment:[23,27],pend:22,peopl:17,per:21,perform:[22,26,27],period:[21,27],persist:26,pick:22,piec:22,ping:0,plain:17,platform:[0,22],point:[0,26,27],poll:[15,16,22],pool:[23,26],popul:20,possibl:27,post:0,postgres_password:0,postgresql:0,postgressql:27,postman:[23,27],potenti:20,practic:[22,26],pre_connect:[5,21],preconfigur:27,preconnect:21,prefer:17,prefix:18,previou:17,prewarm:17,primari:22,process:[0,20,22,27],procur:26,prod:27,product:0,properli:[0,27],properti:[0,15,16],protected_from_scale_down:21,protocol:[23,26],provid:[0,14,16,20,22,23],provis:[15,21,26,27],purpos:[22,27],put:17,pydant:0,pyjwt:0,python:[22,27],queri:[23,26],queue:22,quicker:26,quickli:26,rais:0,ram:21,random:18,randomli:21,rate:22,rather:[22,27],re:[15,16,21,26],read:[0,17,22,26,27],readthedoc:0,real:20,realli:26,reason:22,receiv:[22,23,26],recent:[17,21],recieved_from:0,recommend:8,record:20,record_metr:20,redi:23,reduc:26,redund:26,refer:21,region:[0,2,8,15,21,27],region_nam:[15,21],region_to_ami:21,regiontoami:21,regist:[0,20,27],register_blueprint:0,register_command:0,register_flask_view_metrics_monitor:20,register_handl:0,reject:0,relat:22,releas:27,remain:22,remov:8,repeated_lingering_har:8,repeated_scale_down_har:8,report:20,repres:[0,20,21],request:[0,20,21,22,23,26,27],requir:17,resolv:0,resourc:[0,18,26,27],resource_unavail:0,respons:[22,23,27],rest:15,restart:0,result:[20,22],retriev:[0,22],review:0,role:22,round:20,row:21,rs256:0,rsa:0,run:[0,8,15,16,21,22,23,26,27],running_loc:0,runtim:27,s3:26,s:[0,8,14,20,21,22,23,26],safe:0,sai:22,same:[17,22],scale:[8,23,27],scheme:0,scope:26,search:[8,17,23],second:[0,8,15,16,22],see:[0,20,26,27],select:0,self:0,send:[22,23,27],sendgrid_api_kei:0,sendgrid_default_from:0,sent:[0,20,22],sentri:[24,25],sentry_dsn:0,sentryinitializationerror:0,seriou:0,serv:26,server:[0,23,26],servic:[14,22,23],session:[0,23,26,27],set:[0,15,20,27],set_web_requests_statu:0,setup:20,setup_metrics_logg:20,sh:15,sha:0,share:[22,27],ship:20,should:[0,15,16,17,18,20,21],show:20,shut:[17,27],side:27,sigkil:0,sign:[0,26],signal:[24,25],signatur:26,signific:26,signum:0,sigterm:0,silenced_endpoint:0,similar:15,simpl:22,simpli:[17,22],sinc:[0,22],singleton:20,skip:26,sleep:22,so:[0,15,21,22,26,27],solv:0,some:[17,22,26],someon:17,someth:0,sourc:0,space:8,spawn:22,specif:[0,8,21,26,27],specifi:[0,15,16,21],spend:22,spin:8,spin_til_instances_down:[15,16],spin_til_instances_up:[15,16],spun:21,sql_command:[6,13],sqlalchemi:21,sqlalchemy_database_uri:0,sqlalchemy_track_modif:0,stabl:0,stage:[0,20,27],standard:[0,20],start:[0,12,15,16,20,27],start_inst:[15,16],starter:18,starter_nam:18,startup:27,state:[0,26],statu:[0,17,21,22,26,27],step:[26,27],stop:[0,8,15,26],stop_inst:[15,16],store:[20,23,26],str:[0,5,8,14,15,16,17,18,20,21],stream:[23,27],string:[0,2,17,18,21],stripe:[23,26],stripe_customer_id:0,stripe_customer_id_claim:0,stripe_price_id:0,stripe_secret:0,structur:22,style:24,submodul:[1,6,7,13,24,25],subpackag:[24,25],subscrib:26,subscript:[26,27],subsequ:20,succe:[0,8],success:20,suitabl:0,suppli:[20,26],support:[0,20],suppos:22,sure:[0,26],synchron:22,syntax:0,system:26,t:[0,21,22],tabl:[0,21],tag:17,take:[17,22,26],taken:[17,26],task:[2,14,20],task_definit:0,task_dur:20,task_id:20,task_nam:20,tell:[17,21,27],tenant:26,term:26,termin:8,terminate_inst:8,test:[0,8,12,18,23,27],test_ec2_cli:[6,11],test_prefix:18,test_singl:12,testconfig:0,text:17,than:[17,20,22,26,27],thei:[0,16,17,21,22,26],them:[0,8,21,22],therebi:0,thi:[0,8,14,15,16,17,18,20,21,22,26,27],thing:22,those:[0,8,26],though:22,thread:[0,8,22],three:[22,26],thrown:15,time:[6,13,17,20,21,22,26,27],time_delai:8,time_taken:17,time_wait:[15,16],titl:17,to_text:17,todo:20,togeth:22,token:[6,13,14,20,26],too:[21,22],took:[17,20],tool:[23,27],top:24,track:[26,27],tri:0,trial:26,trigger:[14,27],trust:26,try_scale_down_if_necessari:8,try_scale_down_if_necessary_all_region:8,tryfract:0,tty:27,turn:[15,16],two:[20,22],type:[8,15,16,17,18,21],uid:18,uinput:27,unabl:22,unbound:8,union:20,uniqu:[0,21,22],unknown:[0,17],unless:0,unrecogn:0,unrespons:8,until:[15,16,22],unverified_head:0,up:[0,8,15,16,17,20,21,22,27],updat:[20,21,27],upload:26,upon:[22,26],url:0,us:[0,8,14,15,16,17,20,21,22,23,24,26,27],usag:0,user:[2,8,17,22,23,26],user_id:21,userdata:15,userload:26,usernam:[8,17,18],usual:22,util:[0,6,27],valid:[2,17,24,25,26],valid_tag:17,valu:[0,5,20],vanish:26,variabl:[0,22,27],variant:20,variou:[0,14,23],ve:22,verifi:26,version:[20,21,27],via:[0,15,27],view:21,view_func:0,violat:27,vm:0,wa:[0,17,21,22,26],wai:22,wait:[15,16,22,26],want:[8,17,22,26],we:[0,8,17,21,22,26,27],web:[0,20,22,26,27],webserv:[0,14,27],webserver_url:0,websignalhandl:0,well:0,went:0,were:[0,22,26],what:[15,16,21],when:[0,8,15,21,22,24,26,27],whenev:27,where:[2,20,21,22],whether:[0,8,15,17,18,21,22,26],which:[0,2,8,14,15,16,17,18,20,21,22,26,27],who:[21,26],whose:[0,17],within:22,without:[17,26],word:[22,26],work:[12,22,24],worker:[23,27],workflow:23,worst:22,would:[0,22],wrapper:20,written:20,wrong:0,www:0,x:[0,8,22],yet:22,you:15},titles:["app package","app.blueprints package","app.blueprints.aws package","app.blueprints.host_service package","app.blueprints.mail package","app.constants package","app.helpers package","app.helpers.blueprint_helpers package","app.helpers.blueprint_helpers.aws package","app.helpers.blueprint_helpers.host_service package","app.helpers.blueprint_helpers.mail package","app.helpers.helpers_tests package","app.helpers.helpers_tests.aws_tests package","app.helpers.utils package","app.helpers.utils.auth0 package","app.helpers.utils.aws package","app.helpers.utils.cloud_interface package","app.helpers.utils.event_logging package","app.helpers.utils.general package","app.helpers.utils.mail package","app.helpers.utils.metrics package","app.models package","Webserver Architecture","Welcome to the Fractal Webserver internal documentation!","Module Documentation","app","Webserver Responsibilities","Other Services"],titleterms:{access:26,action:27,agent:27,app:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,25],applic:26,architectur:22,auth0:14,auth:18,aw:[2,8,15,27],aws_instance_post:8,aws_instance_st:8,aws_mandelbox_assign_post:8,aws_mandelbox_blueprint:2,aws_test:12,base_cloud_interfac:16,base_ec2_cli:15,blueprint:[1,2,3,4],blueprint_help:[7,8,9,10],cloud_interfac:16,comput:26,config:0,config_table_nam:5,conftest:11,constant:5,content:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23],control:26,databas:27,document:[23,24],ec2_userdata:15,end:26,env_nam:5,event:17,event_log:17,event_tag:17,event_text:17,except:0,factori:0,flask_app:20,flask_handl:0,flask_view:20,fractal:[23,27],gener:18,github:27,hardwar:21,helper:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],helpers_test:[11,12],hirefir:27,host:27,host_servic:[3,9],http:22,indic:23,instance_state_valu:5,intern:23,introduct:23,kei:20,keys_dim:20,limit:18,log:18,mail:[4,10,19],metric:20,model:21,modul:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,24],name_gener:18,other:27,packag:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],pool:22,protocol:27,redi:22,respons:26,scale:[22,26],sentri:0,server:[22,27],servic:27,signal:0,sql_command:18,start:26,state:22,store:22,stream:26,stripe:27,submodul:[0,2,5,8,11,12,14,15,16,17,18,20,21],subpackag:[0,1,6,7,11,13],tabl:23,task:22,test_ec2_cli:12,time:18,token:18,user:27,util:[13,14,15,16,17,18,19,20],valid:0,webserv:[22,23,26],welcom:23,worker:22,workflow:27}})