package = JSON.parse(File.read(File.join(__dir__, "package.json")))
version = package['version']

Pod::Spec.new do |s|
  s.name             = "react-native-itunes"
  s.version          = version
  s.summary          = package["description"]
  s.requires_arc = true
  s.license      = 'MIT'
  s.homepage     = 'n/a'
  s.authors      = { "kadiks" => "" }
  s.source       = { :git => "https://github.com/kadiks/react-native-itunes.git", :tag => 'v#{version}'}
  s.source_files = 'RNiTunes/*.{h,m}'
  s.platform     = :ios, "12.3"
  s.dependency 'React/Core'
end
