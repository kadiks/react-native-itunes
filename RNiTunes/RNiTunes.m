//
//  RNiTunes.m
//  RNiTunes
//
//  Created by Jénaïc Cambré on 13/01/16.
//  Copyright © 2016 Jénaïc Cambré. All rights reserved.
//

#import "RNiTunes.h"
#import <MediaPlayer/MediaPlayer.h>

@interface RNiTunes()

@end

@implementation RNiTunes
{
    
}

RCT_EXPORT_MODULE()


RCT_EXPORT_METHOD(getTracks:
                  (RCTResponseSenderBlock)successCallback) {
    
    NSLog(@"%@ %@", NSStringFromClass([self class]), NSStringFromSelector(_cmd));
    
    MPMediaQuery *songsQuery = [MPMediaQuery songsQuery];
    NSMutableArray *mutableSongsToSerialize = [NSMutableArray array];
    
    for (MPMediaItem *song in songsQuery.items) {
        
        NSString *albumTitle =[song valueForProperty: MPMediaItemPropertyAlbumTitle];
        NSString *albumArtist =[song valueForProperty: MPMediaItemPropertyAlbumArtist];
        NSString *duration =[song valueForProperty: MPMediaItemPropertyPlaybackDuration];
        NSString *genre =[song valueForProperty: MPMediaItemPropertyGenre];
        NSString *playCount =[song valueForProperty: MPMediaItemPropertyPlayCount];
        NSString *title =[song valueForProperty: MPMediaItemPropertyTitle];
        
        NSDictionary *songDictionary = @{@"albumTitle":albumTitle, @"albumArtist": albumArtist, @"duration":duration, @"genre":genre, @"playCount": playCount, @"title": title};
        [mutableSongsToSerialize addObject:songDictionary];
    }
    
    successCallback(@[mutableSongsToSerialize]);
}

@end