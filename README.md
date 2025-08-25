# SkateFit Content Repository

This repository contains all dynamic content for the SkateFit iOS app, including workout data, onboarding content, and exercise videos. Content is served directly to the app via GitHub's raw file hosting, enabling instant updates without app store submissions.

## 🏗️ Repository Structure

```
skate-fit-files/
├── workouts.json          # Complete workout database
├── onboarding.json        # Onboarding flow content
├── videos/                # Exercise demonstration videos
│   ├── warm_up/          # Warm-up exercise videos
│   ├── main_workout/     # Main exercise videos
│   └── cool_down/        # Cool-down exercise videos
└── README.md             # This file
```

## 📋 Content Files

### `workouts.json`
Complete database of skateboarding-specific fitness workouts.

**Structure:**
```json
{
  "workouts": [
    {
      "id": "balance-core-strength",
      "name": "Balance & Core Strength",
      "description": "Build the foundational stability...",
      "difficulty": "beginner",
      "estimatedDuration": 25,
      "sections": {
        "warmUp": [
          {
            "name": "Ankle Circles",
            "videoFileName": "ankle_circles.mp4",
            "instructions": {
              "beginner": "10 reps each direction",
              "intermediate": "15 reps each direction", 
              "advanced": "20 reps each direction"
            }
          }
        ],
        "mainWorkout": [...],
        "coolDown": [...]
      }
    }
  ]
}
```

**Key Features:**
- **3 Difficulty Levels**: Beginner, Intermediate, Advanced
- **Structured Workouts**: Warm-up → Main → Cool-down
- **Exercise Instructions**: Specific reps/duration per difficulty
- **Video Integration**: Direct links to demonstration videos
- **Metadata**: Duration estimates, descriptions, categories

### `onboarding.json` 
Dynamic onboarding flow content for new users.

**Structure:**
```json
{
  "onboarding": {
    "welcome": {
      "title": "Welcome to SkateFit",
      "description": "Build the strength, balance and mobility...",
      "features": [...]
    },
    "difficulty": {
      "title": "Difficulty Levels", 
      "cards": [...]
    },
    "equipment": {
      "title": "What You'll Need",
      "cards": [...]
    },
    "tutorial": {
      "title": "Using Your Workouts",
      "cards": [...]
    }
  }
}
```

**Content Sections:**
- **Welcome Screen**: App introduction and value proposition
- **Difficulty Guide**: Explanation of beginner/intermediate/advanced levels
- **Equipment Overview**: Required equipment with alternatives
- **Tutorial**: How to navigate and use workout videos

## 🎥 Video Content

### Video Organization
Videos are organized by workout section and named to match the `videoFileName` field in workout JSON data.

### Video Specifications
- **Format**: MP4 (H.264)
- **Resolution**: 1080p preferred, 720p minimum
- **Aspect Ratio**: 16:9 or 9:16 (portrait)
- **Duration**: 15-60 seconds per exercise
- **File Size**: <50MB per video for fast loading

### Naming Convention
```
exercise_name.mp4                    # Standard format
ankle_circles.mp4                    # Example
banded_glute_bridge_abductors.mp4   # Multi-word exercises
```

## 🚀 Content Delivery

### How It Works
1. **iOS App Requests**: App fetches content via HTTPS GET requests
2. **GitHub Serves**: Content delivered via `raw.githubusercontent.com`
3. **Cache Busting**: Timestamp parameters ensure fresh content
4. **Local Fallback**: App includes backup content for offline use

### API Endpoints
```
# Workout data
https://raw.githubusercontent.com/banddude/skate-fit-files/main/workouts.json

# Onboarding content  
https://raw.githubusercontent.com/banddude/skate-fit-files/main/onboarding.json

# Video streaming
https://raw.githubusercontent.com/banddude/skate-fit-files/main/videos/[filename].mp4
```

### Cache Management
- **App-Side Caching**: iOS app caches content locally
- **Cache Invalidation**: Timestamp-based cache busting
- **Update Frequency**: Content refreshed on app launch and pull-to-refresh

## ✏️ Content Management

### Editing Workflow
1. **Edit JSON Files**: Modify workout or onboarding content
2. **Validate JSON**: Ensure proper JSON syntax and structure  
3. **Commit Changes**: Push to main branch
4. **Auto-Deploy**: Changes are immediately available to app users

### JSON Validation
```bash
# Validate JSON syntax
cat workouts.json | python -m json.tool > /dev/null && echo "Valid JSON" || echo "Invalid JSON"

# Pretty format JSON
cat workouts.json | python -m json.tool > workouts_formatted.json
```

### Content Guidelines

#### Workout Content
- **Clear Descriptions**: Concise but informative exercise descriptions
- **Consistent Naming**: Use underscores for video filenames
- **Difficulty Scaling**: Ensure beginner/intermediate/advanced progressions make sense
- **Duration Accuracy**: Test and verify estimated workout durations

#### Onboarding Content
- **Marketing Focus**: Emphasize benefits and value proposition
- **User-Friendly Language**: Avoid technical jargon
- **Motivational Tone**: Encourage users to start their fitness journey
- **Clear Instructions**: Simple, actionable guidance

## 🎯 Content Strategy

### Workout Categories
- **Balance & Stability**: Core skateboarding skills
- **Strength Training**: Functional movement patterns  
- **Mobility & Flexibility**: Injury prevention and recovery
- **Sport-Specific**: Skateboarding movement preparation

### Content Principles
- **Skateboarding-Specific**: All exercises relate to skateboarding performance
- **Progressive Difficulty**: Clear progression from beginner to advanced
- **Equipment Accessible**: Focus on commonly available equipment
- **Time Efficient**: 25-35 minute sessions for busy schedules

## 📊 Analytics & Insights

### Content Performance
Track which workouts and exercises are most popular to inform content strategy:
- **Workout Completion Rates**: Which workouts users finish
- **Difficulty Distribution**: Most popular difficulty levels
- **Exercise Engagement**: Which videos get watched completely

### Content Updates
- **Seasonal Content**: New workouts for specific skateboarding seasons
- **User Feedback**: Incorporate user requests and suggestions
- **Equipment Variations**: Adapt to trending fitness equipment
- **Progressive Updates**: Gradually increase workout complexity

## 🛠️ Technical Specifications

### JSON Schema Requirements
```json
{
  "workout": {
    "required": ["id", "name", "difficulty", "sections"],
    "properties": {
      "id": {"type": "string"},
      "name": {"type": "string"}, 
      "difficulty": {"enum": ["beginner", "intermediate", "advanced"]},
      "sections": {
        "required": ["warmUp", "mainWorkout", "coolDown"]
      }
    }
  }
}
```

### File Size Limits
- **JSON Files**: <1MB each (for fast parsing)
- **Video Files**: <50MB each (for reasonable download times)
- **Total Repository**: <1GB (GitHub LFS recommended for large videos)

### Version Control
- **Main Branch**: Production content served to live app
- **Feature Branches**: For testing new content before release
- **Semantic Commits**: Clear commit messages for content changes

## 🚨 Content Moderation

### Quality Standards
- **Professional Videos**: Clear demonstrations with proper form
- **Safe Exercises**: All movements reviewed for injury risk
- **Appropriate Content**: Family-friendly, suitable for all ages
- **Brand Consistency**: Maintains SkateFit brand voice and values

### Review Process
1. **Content Creation**: Draft new workouts or onboarding content
2. **Technical Review**: Validate JSON structure and video quality
3. **Fitness Review**: Ensure exercise safety and effectiveness
4. **Brand Review**: Verify consistent messaging and tone
5. **Deploy**: Commit to main branch for immediate app delivery

## 📞 Support

### Content Issues
For problems with workout data, videos, or onboarding content:
- **GitHub Issues**: Report bugs or content errors
- **Content Requests**: Suggest new workouts or improvements
- **Technical Issues**: App loading or parsing problems

### Contributors
- **Mike Shaffer**: Primary content curator and app developer
- **Fitness Consultants**: Exercise design and safety review
- **Video Production**: Professional exercise demonstrations

---

**📱 Companion App**: [SkateFit iOS App](https://github.com/your-username/skatefit-ios)

*Dynamic content delivery for the skateboarding fitness community.*
