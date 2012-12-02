namespace :jekyll do

  desc 'Delete generated _site files'
  task :clean do
    system "rm -fR _site"
  end
  
  desc 'Run the jekyll dev server'
  task :server => [:compile] do
    system "jekyll --server 8080"
  end
  
  desc 'Clean temporary files and run the server'
  task :compile => [:clean, 'compass:clean', 'compass:compile'] do
    system "jekyll"
  end

end


#namespace :deploy do
#  desc 'Deploy to production'
#  task :prod => ['dev:off'] do
#    system "cap deploy"
#  end
#  
#end

namespace :compass do  

  desc 'Delete temporary compass files'
  task :clean do
    system "rm -fR css/*"
  end

  desc 'Run the compass watch script'
  task :watch do
    system "compass watch"
  end

  desc 'Compile sass scripts'
  task :compile => [:clean] do
    system "compass compile"
  end
  
  desc 'Compile and minify css'
  task :minify => [:clean] do
      system "compass compile -c prod_config.rb"
  end

end

namespace :pygments do  

  desc 'Delete pygments CSS files'
  task :clean do
    system "rm -f _sass/3rd_party/pygments/*.scss"
  end

  desc 'Generate pygments CSS'
  task :compile => [:clean] do
    system "mkdir -p _sass/3rd_party/pygments"
    system "pygmentize -S default -f html > _sass/3rd_party/pygments/default.scss"
  end

end

namespace :dev do

  desc 'Un-publish old posts to speed up development'
  task :on => ['jekyll:clean'] do
    system 'find . -name "*.md" -exec sed -i "" "s|^published: true|published: false|g" {} \;'
    system 'find . -name "*.yml" -exec sed -i "" "s|^published: true|published: false|g" {} \;'
  end

  desc 'Re-publish old posts for deployment'
  task :off => ['jekyll:clean'] do
    system 'find . -name "*.md" -exec sed -i "" "s|^published: false|published: true|g" {} \;'
    system 'find . -name "*.yml" -exec sed -i "" "s|^published: false|published: true|g" {} \;'
  end
  
  desc 'Run the dev instance'
  task :run => ['jekyll:compile', 'jekyll:server'] do
  end

end

namespace :ant do

    desc 'Build and minify.'
    task :build do
        system 'ant -f build/build.xml build'
    end

    desc 'Clean'
    task :clean do
        system 'ant -f build/build.xml clean'
    end

end

