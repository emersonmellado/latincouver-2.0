class BaseSerializer < ActiveModel::Serializer
	ActiveModel::Serializer.config.key_transform = :unaltered
end