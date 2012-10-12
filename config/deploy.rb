# Capistrano deploy.rb for rails playground vps
# with support for bundles and assets pipeline

require "bundler/capistrano"

set :ip_address, "75.98.32.206"
set :scm_username , "leftis"
set :scm, :git
set :application, "cultio"
set :repository,  "git@github.com:leftis/tefteraki.git"
set :user , "root"
set :deploy_to, "/home/#{application}"
set :shared_directory, "#{deploy_to}/shared"
set :use_sudo, false
set :group_writable, false
set :keep_releases, 3

default_run_options[:pty] = true

role :app, ip_address
role :web, ip_address
role :db,  ip_address, :primary => true

task :after_update_code, :roles => [:web, :db, :app] do
  run "chmod 755 #{release_path}/public"
  run "chown #{application}:#{application} #{release_path} -R"
end

after 'deploy', 'deploy:fix_permissions'

namespace :deploy do

  desc "restart passenger"
  task :restart do
    passenger::restart
  end
  [:start, :stop].each do |t|
    desc "#{t} task is a no-op with mod_rails"
    task t, :roles => :app do ; end
  end

  desc "fix_permissions in project folder"
  task :fix_permissions, :roles => [:app, :db, :web] do
    run "chmod 755 #{release_path}/public"
    run "chown #{application}:#{application} #{release_path} -R"
  end
end

namespace :passenger do
  desc "Restart passenger"
  task :restart do
    run "touch #{current_path}/tmp/restart.txt"
  end
end
