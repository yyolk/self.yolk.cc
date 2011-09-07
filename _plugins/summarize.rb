module Jekyll
  module Filters
    def summarize(str, splitstr = /<!-- CUT -->\s(.*)\s<!-- CUT -->/)
      
        splitstr.match(str) do |m|
            return m[1]
        end

    end
  end
end
